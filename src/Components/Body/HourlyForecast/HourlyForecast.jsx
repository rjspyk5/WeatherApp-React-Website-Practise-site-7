import React from 'react';

export const HourlyForecast = props => {
  return (
    <div className='text-white my-10'>
      <h6>{props.weatherType} FORECAST</h6>
      <hr />
      <div className='flex justify-between'></div>
    </div>
  );
};
