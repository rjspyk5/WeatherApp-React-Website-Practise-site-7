import React, { useContext } from 'react';
import { TimeAndCountry } from './TimeDateCountrySection/TimeDateCountry';
import { SunriseAndSet } from './SunriseAndSet/SunriseAndSet';
import { HourlyForecast } from './HourlyForecast/HourlyForecast';
import { CurrentWeather } from './CurrentWeather/CurrentWeather';
import { DataAndInputRcvrContext } from '../../App';

export const MainBody = () => {
  const [
    contextt,
    currentWeather,
    fivedayweatherr,
    Celcius,
    setCelcius,
    countryname,
    DateDaynameTime,
  ] = useContext(DataAndInputRcvrContext);
  const ListOfWeather = fivedayweatherr && fivedayweatherr.list;
  let dailyWeather = [];

  const time = true;
  const DailyWeatherList =
    ListOfWeather &&
    ListOfWeather.filter(el => {
      const unique_date = el.dt_txt.slice(0, 10);
      const test = dailyWeather.find(el => unique_date === el);
      if (unique_date != test) {
        dailyWeather.push(unique_date);
      }
      return unique_date != test && unique_date != test && el;
    });

  const HourlyWeatherList =
    ListOfWeather && ListOfWeather.filter((el, index) => index < 4);

  return (
    <>
      <TimeAndCountry></TimeAndCountry>
      <CurrentWeather></CurrentWeather>
      <SunriseAndSet></SunriseAndSet>
      <HourlyForecast
        weatherType='Hourly'
        WeatherDetails={HourlyWeatherList}
        Celcius={Celcius}
        Time={time}
      ></HourlyForecast>
      <HourlyForecast
        weatherType='Daily'
        WeatherDetails={DailyWeatherList}
        Celcius={Celcius}
      ></HourlyForecast>
    </>
  );
};
