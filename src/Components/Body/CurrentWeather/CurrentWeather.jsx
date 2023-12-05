import React, { useContext } from 'react';
import { DataAndInputRcvrContext } from '../../../App';
import { WiHumidity } from 'react-icons/wi';
import { MdWindPower } from 'react-icons/md';
import { RiTempHotLine } from 'react-icons/ri';
import { dataCovertor } from '../../assetsAndFunction/DataConvertor';

export const CurrentWeather = () => {
  const [, currentWeather, fivedayweatherr, Celcius, setCelcius] = useContext(
    DataAndInputRcvrContext
  );
  console.log(fivedayweatherr);
  const currentWeatherMainData = currentWeather.main;

  const data = dataCovertor(currentWeatherMainData, Celcius);

  return (
    <div className='flex justify-around text-white my-3'>
      <div></div>
      <div className='ml-[88px]'>
        <h3 className='text-5xl'>30</h3>
      </div>
      <div>
        <div className='flex'>
          <RiTempHotLine className='mt-1' />
          <p>Real Fell :</p>
        </div>
        <div className='flex'>
          <WiHumidity className='mt-1' />
          <p> Humidity :</p>
        </div>
        <div className='flex'>
          <MdWindPower className='mt-1' />
          <p> Wind :</p>
        </div>
      </div>
    </div>
  );
};
