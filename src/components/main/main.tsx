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
  // TODO - example to config file
  // uncomment once you read it 

  // type IStatisticsCircleVariablesModel = {
  //   value: string;
  //   text: string;
  //   color: '#007BFF' | 'green' | '#28A745' | 'red';
  // }

  // const statisticsCircleVariablesConfig: IStatisticsCircleVariablesModel[] = [
  //   {
  //     value: formatNumber(parseInt(data.cases)),
  //     color: '#007BFF',
  //     text: 'total Cases'
  //   },
  //   {
  //     value: formatNumber(parseInt(data.active)),
  //     color: 'green',
  //     text: 'active Cases'
  //   },
  //   {
  //     value: formatNumber(parseInt(data.todayCases)),
  //     color: '#28A745',
  //     text: 'new Cases Today'
  //   },
  //   {
  //     value: formatNumber(parseInt(data.deaths)),
  //     color: 'red',
  //     text: 'deaths'
  //   },
  // ] 

  // TODO - redundant can remove 
  const totalCases = formatNumber(parseInt(data.cases));
  const activeCases = formatNumber(parseInt(data.active));
  const newCasesToday = formatNumber(parseInt(data.todayCases));
  const deaths = formatNumber(parseInt(data.deaths));

  return (
    <>
      {currentCountry !== "" ? (
        <div className="mainContainer">
          <img
            // TODO - move /src/assets/image/covid.png to variable, like: IMG_SOURCE = "/src/assets/image/covid.png"
            src="/src/assets/image/covid.png"
            className="covidImgSpin"
            // TODO - width and height should place in variable IMG_HEIGHT=50
            width={50}
            height={50}
          />

          <p className="title">
            {/* TODO - wrap COVID-19 in <span class="pr-2"> */}
            {/* remove " " */}
            COVID-19{" "}
            {currentCountry !== "" && currentCountry + ` - ${data.continent}`}
          </p>

          {/* TODO - use map and store value, text, color in config prop */}
          {/* {statisticsCircleVariablesConfig.map(statisticVal => (
                      <StatisticsCircle
                      key={statisticVal.value}
                      value={statisticVal.value}
                      text={statisticVal.text}
                      color={statisticVal.color}
                    />
          ))} */}

          {/* TODO - can remove */}
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
