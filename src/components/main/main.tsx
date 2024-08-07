import "./main.css";
import { useAppSelector } from "../../redux/hooks";
import "react-circular-progressbar/dist/styles.css"; // נייבא את ה-CSS הבסיסי
import StatisticsCircle from "../../shared/components/StatisticsCircle/StatisticsCircle";
import { formatNumber } from "../../shared/functions/formatNumber";

const Main = () => {
  const currentCountry = useAppSelector(
    (state) => state.currentCountrySlice.currentCountry
  );
  
  const data = useAppSelector((state) => state.dataCountrySlice.dataCountry);
  const totalCases = formatNumber(parseInt(data.cases));
  const activeCases = formatNumber(parseInt(data.active));
  const newCasesToday = formatNumber(parseInt(data.todayCases));
  const deaths = formatNumber(parseInt(data.deaths));

  return (
    <>
      {currentCountry !== "" ? (
        <div className="mainContainer">
          <img
            src="/src/assets/image/covid.png"
            className="covidImgSpin"
            width={50}
            height={50}
          />

          <p className="title">
            COVID-19{" "}
            {currentCountry !== "" && currentCountry + ` - ${data.continent}`}
          </p>

          <StatisticsCircle
            value={totalCases}
            text="total Cases"
            color="#007BFF"
          />
          <StatisticsCircle
            value={activeCases}
            text="active Cases"
            color="green"
          />
          <StatisticsCircle
            value={newCasesToday}
            text="new Cases Today"
            color="#28A745"
          />

          <StatisticsCircle value={deaths} text="deaths" color="red" />
        </div>
      ) : (
        <h2 className="noSearchText"> Please search for a country </h2>
      )}
    </>
  );
};

export default Main;
