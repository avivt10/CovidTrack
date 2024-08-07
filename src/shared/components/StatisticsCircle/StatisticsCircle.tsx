import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// TODO - comments just in english, delete that or translate 
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
        // TODO - why do you need backtick here
        text={`${value}`}
        styles={buildStyles({
          pathColor: color,
          textColor: '#333', // TODO - text color need to be as a prop 'textColor'
        })}
      />
      <p className='nameCountryStyle'>{text}</p>
    </div>
  );
};

export default StatisticsCircle;
