import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // נייבא את ה-CSS הבסיסי
import "./StatisticsCircle.css"

interface StatisticsCircleProps {
  value: string;
  text: string;
  color?: string;
}

const StatisticsCircle: React.FC<StatisticsCircleProps> = ({ value, text, color = '#4CAF50' }) => {
  
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
