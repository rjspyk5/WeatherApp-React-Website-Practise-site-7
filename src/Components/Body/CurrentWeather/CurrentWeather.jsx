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
  console.log(fivedayweatherr);
  const currentWeatherMainData = currentWeather.main;
  const data = dataCovertor(currentWeatherMainData, Celcius);
  console.log(data);

  return (
    <div className='flex justify-around text-white my-3'>
      <div></div>
      <div className='ml-[88px]'>
        {data != undefined ? (
          <h3 className='text-5xl'>{data[0].temp} </h3>
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
