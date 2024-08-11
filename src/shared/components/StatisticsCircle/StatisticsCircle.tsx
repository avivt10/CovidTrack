import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./StatisticsCircle.css"
import { IStatisticsCircleModel } from './models/statisticsCircleModel';



const StatisticsCircle: React.FC<IStatisticsCircleModel> = ({ value, text, color = '#4CAF50' }) => {
  
  return (
    <div className='circleStyle'>
      <CircularProgressbar
        value={100}
        text={`${value}`}
        styles={buildStyles({
          pathColor: color,
          textColor: '#333',
        })}
      />
      <p className='nameCountryStyle'>{text}</p>
    </div>
  );
};

export default StatisticsCircle;
