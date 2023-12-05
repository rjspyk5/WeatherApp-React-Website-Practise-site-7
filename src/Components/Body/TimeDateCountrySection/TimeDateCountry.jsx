import React, { useContext } from 'react';
import { DataAndInputRcvrContext } from '../../../App';
import { Loading } from '../Loading/Loading';

export const TimeAndCountry = () => {
  const [, currentWeather, fivedayweatherr] = useContext(
    DataAndInputRcvrContext
  );

  const countryname = currentWeather.name;

  const weatherType =
    currentWeather &&
    currentWeather.weather &&
    currentWeather.weather.length > 0 ? (
      <p className='text-[#34ebe1] text-center my-6'>
        {currentWeather.weather[0].main}
      </p>
    ) : (
      <Loading />
    );

  return (
    <>
      <div className='flex text-center text-white'>
        <p className='mx-auto opacity-50'>
          Tuesday, 31 May 2023 | Local time : 11:24 AM
        </p>
      </div>
      <h3 className='text-center text-white font-bold my-6'>
        {countryname ? countryname : <Loading />}
      </h3>
      {weatherType}
    </>
  );
};
