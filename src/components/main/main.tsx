import "./main.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "react-circular-progressbar/dist/styles.css"; // נייבא את ה-CSS הבסיסי
import StatisticsCircle from "../../shared/components/StatisticsCircle/StatisticsCircle";
import { formatNumber } from "../../shared/functions/formatNumber";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { IGeolocationModel } from "../../models/geolocationModel";
import covid from "./../../assets/images/covid.png"
import { IStatisticsCircleVariablesModel } from "../../config/models/StatisticsCircleVariablesModel ";
import { setDataCountry } from "../../redux/features/dataCountrySlice";

const Main = () => {
  const currentCountry = useAppSelector(
    (state) => state.dataCountrySlice.currentCountry
  );
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.dataCountrySlice.dataCountry);
  const statisticsCircleVariablesConfig: IStatisticsCircleVariablesModel[] = [
    {
      value: formatNumber(parseInt(data.cases)),
      color: '#007BFF',
      text: 'total Cases'
    },
    {
      value: formatNumber(parseInt(data.active)),
      color: 'green',
      text: 'active Cases'
    },
    {
      value: formatNumber(parseInt(data.todayCases)),
      color: '#28A745',
      text: 'new Cases Today'
    },
    {
      value: formatNumber(parseInt(data.deaths)),
      color: 'red',
      text: 'deaths'
    },
  ] 
const getCountryFromCoordinates = async (location: IGeolocationModel) => {
      try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json`, {
          params: {
            key: import.meta.env.VITE_API_KEY,
            q: `${location.coords.latitude},${location.coords.longitude}`,
            limit: 1,
            language: 'en'
          }
        }
      );
      const results = response.data.results;
      if (results.length > 0) {
        return results[0].components.country;
      }
      return null;
    } catch (error) {
      console.error('Error fetching country:', error);
      toast.error('Error fetching country. Please try again.');
      return null;
    }
  };


  const getDataCountry =  async (country: string) => {
    try {
      const response = await axios(`${import.meta.env.VITE_BASE_URL}/${country}`) 
      // dispatch(currentSelectCountry(country));
      dispatch(setDataCountry(response.data));
    } catch (err) {
      toast(
        String("Country not found. Please check the name and try again.")
      );
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location: IGeolocationModel = {
            coords:{
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          }
          const countryName = await getCountryFromCoordinates(location);
          getDataCountry(countryName);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  console.log(currentCountry);

  return (
    <>
      {currentCountry !== "" && currentCountry !== undefined ? (
        <div className="mainContainer">
          <img
            src={covid}
            className="covidImgSpin"
            width={50}
            height={50}
          />

          <span className="title">
            COVID-19 
            {currentCountry !== "" && " " + currentCountry + ` - ${data.continent}`}
          </span>
          {
            statisticsCircleVariablesConfig.map(statisticVal => (
              <StatisticsCircle
              key={statisticVal.value}
              value={statisticVal.value}
              text={statisticVal.text}
              color={statisticVal.color}
            />
            ))}
        </div>
      ) : (
        <h2 className="noSearchText"> Please search for a country </h2>
      )}
    </>
  );
};

export default Main;
