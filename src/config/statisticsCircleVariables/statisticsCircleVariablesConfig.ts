import { useAppSelector } from "../../redux/hooks";
import { formatNumber } from "../../shared/functions/formatNumber";
import { IStatisticsCircleVariablesModel } from "../models/StatisticsCircleVariablesModel ";
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

  export default statisticsCircleVariablesConfig;