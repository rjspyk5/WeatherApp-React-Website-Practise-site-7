import React, { useContext } from 'react';
import { DataAndInputRcvrContext } from '../../../App';
import { WiHumidity } from 'react-icons/wi';
import { MdWindPower } from 'react-icons/md';
import { RiTempHotLine } from 'react-icons/ri';
import { dataCovertor } from '../../assetsAndFunction/DataConvertor';
import { Loading } from '../Loading/Loading';

export const CurrentWeather = () => {
  const [, currentWeather, fivedayweatherr, Celcius, setCelcius] = useContext(
    DataAndInputRcvrContext
  );

  const currentWeatherMainData = currentWeather.main;
  const data = dataCovertor(currentWeatherMainData, Celcius);
  const iconID = currentWeather.weather && currentWeather.weather[0].icon;
  return (
    <div className='flex justify-between items-center text-white my-3'>
      <div>
        <img
          src={
            iconID ? `https://openweathermap.org/img/wn/${iconID}@2x.png` : null
          }
          alt='Weather Icon'
        />
      </div>
      <div className=''>
        {data != undefined ? (
          <h3 className='text-5xl '>{data[0].temp} </h3>
        ) : (
          <Loading />
        )}
      </div>
      <div>
        <div className='flex'>
          <RiTempHotLine className='mt-1' />
          <p>Real Fell : {data != undefined ? data[1].feels_like : null} </p>
        </div>
        <div className='flex'>
          <WiHumidity className='mt-1' />
          <p> Humidity :{data != undefined ? data[1].feels_like : null}</p>
        </div>
        <div className='flex'>
          <MdWindPower className='mt-1' />
          <p> Wind :{data != undefined ? data[1].feels_like : null}</p>
        </div>
      </div>
    </div>
  );
};
