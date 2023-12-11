import React, { useContext } from 'react';
import { WiSunrise } from 'react-icons/wi';
import { WiSunset } from 'react-icons/wi';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { DataAndInputRcvrContext } from '../../../App';
import { dataCovertor } from '../../assetsAndFunction/DataConvertor';
import { TimeConverter } from '../../assetsAndFunction/TimeConverter';

export const SunriseAndSet = () => {
  const [
    contextt,
    currentWeather,
    fivedayweatherr,
    Celcius,
    setCelcius,
    countryname,
  ] = useContext(DataAndInputRcvrContext);

  const currentWeatherMainData = currentWeather.main;
  const data = dataCovertor(currentWeatherMainData, Celcius);
  const sunrise =
    currentWeather &&
    currentWeather.sys &&
    TimeConverter(currentWeather.sys.sunrise, currentWeather.timezone);
  const sunset =
    currentWeather &&
    currentWeather.sys &&
    TimeConverter(currentWeather.sys.sunset, currentWeather.timezone);
  return (
    <div className='flex my-10 text-white justify-between'>
      <div className='flex'>
        <WiSunrise className='mx-3 mt-1' />
        <p>Rise : {sunrise && sunrise.time}</p>
      </div>
      <p>|</p>
      <div className='flex justify-evenly'>
        <WiSunset className='mx-3 mt-1' />
        <p> Set : {sunset && sunset.time}</p>
      </div>
      <p>|</p>
      <div className='flex'>
        <FaArrowUp className='mx-3 mt-1' />
        <p>High :{data ? data[3].temp_max : null}</p>
      </div>
      <p>|</p>
      <div className='flex'>
        <FaArrowDown className='mx-3 mt-1' />
        <p>Low : {data ? data[2].temp_min : null}</p>
      </div>
    </div>
  );
};
