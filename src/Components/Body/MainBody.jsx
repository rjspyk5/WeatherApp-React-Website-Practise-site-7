import React from 'react';
import { TimeAndCountry } from './TimeDateCountrySection/TimeDateCountry';
import { SunriseAndSet } from './SunriseAndSet/SunriseAndSet';
import { HourlyForecast } from './HourlyForecast/HourlyForecast';
import { DailyForecast } from './DailyForecast/DailyForecast';
import { CurrentWeather } from './CurrentWeather/CurrentWeather';

export const MainBody = () => {
  return (
    <>
      <TimeAndCountry></TimeAndCountry>
      <CurrentWeather></CurrentWeather>
      <SunriseAndSet></SunriseAndSet>
      <HourlyForecast></HourlyForecast>
      <DailyForecast></DailyForecast>
    </>
  );
};
