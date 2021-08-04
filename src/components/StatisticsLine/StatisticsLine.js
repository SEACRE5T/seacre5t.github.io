import React from 'react';
import './StatisticsLine.scss';

const StatisticsLine = ({
  count, text
}) => {
  return (
    <div className='line__block'>
      <div className={`line__${count}`}/>
      {count ? 
        <div className='line__text'>{text}</div>
      :
        <div className='line__only-text'>{text}</div>
      }
    </div>
  );
};

export default StatisticsLine;

