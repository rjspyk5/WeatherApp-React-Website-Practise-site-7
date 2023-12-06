import React, { useContext } from 'react';
import { TimeAndCountry } from './TimeDateCountrySection/TimeDateCountry';
import { SunriseAndSet } from './SunriseAndSet/SunriseAndSet';
import { HourlyForecast } from './HourlyForecast/HourlyForecast';
import { CurrentWeather } from './CurrentWeather/CurrentWeather';
import { DataAndInputRcvrContext } from '../../App';
import { dataCovertor } from '../assetsAndFunction/DataConvertor';

export const MainBody = () => {
  const [, currentWeather, fivedayweatherr] = useContext(
    DataAndInputRcvrContext
  );
  console.log(fivedayweatherr);
  return (
    <>
      <TimeAndCountry></TimeAndCountry>
      <CurrentWeather></CurrentWeather>
      <SunriseAndSet></SunriseAndSet>
      <HourlyForecast weatherType='Hourly'></HourlyForecast>
      <HourlyForecast weatherType='Daily'></HourlyForecast>
    </>
  );
};
