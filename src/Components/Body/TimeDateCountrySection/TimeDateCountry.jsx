import React, { useContext } from 'react';
import { DataAndInputRcvrContext } from '../../../App';
import { Loading } from '../Loading/Loading';

export const TimeAndCountry = () => {
  const [
    contextt,
    currentWeather,
    fivedayweatherr,
    Celcius,
    setCelcius,
    countryname,
    DateDaynameTime,
    countryDetails,
  ] = useContext(DataAndInputRcvrContext);

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
          {DateDaynameTime
            ? `${DateDaynameTime.date} , ${DateDaynameTime.dayName} | Local time : ${DateDaynameTime.time} `
            : null}
        </p>
      </div>
      <h3 className='text-center text-white font-bold mt-6 mb-2'>
        {countryDetails != [] && countryDetails[0] ? (
          countryDetails[0].name
        ) : (
          <Loading />
        )}
      </h3>
      <h3 className='text-center text-white font-bold'>
        {countryDetails &&
          countryDetails != [] &&
          countryDetails[0] &&
          countryDetails[0].state}
      </h3>
      {weatherType}
    </>
  );
};
