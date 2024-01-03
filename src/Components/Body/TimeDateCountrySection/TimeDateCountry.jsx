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

  countryDetails && countryDetails != [] && console.log(countryDetails);

  return (
    <>
      <div className='flex text-center text-white'>
        <p className='mx-auto opacity-50'>
          {DateDaynameTime
            ? `${DateDaynameTime.date} , ${DateDaynameTime.dayName} | Local time : ${DateDaynameTime.time} `
            : null}
        </p>
      </div>
      <h3 className='text-center text-white font-bold my-6'>
        {countryname ? countryname : <Loading />}
      </h3>
      {weatherType}
    </>
  );
};
