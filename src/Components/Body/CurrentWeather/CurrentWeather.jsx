import React, { useContext } from 'react';
import { DataAndInputRcvrContext } from '../../../App';
import { WiHumidity } from 'react-icons/wi';
import { MdWindPower } from 'react-icons/md';
import { RiTempHotLine } from 'react-icons/ri';

export const CurrentWeather = () => {
  const [, currentWeather] = useContext(DataAndInputRcvrContext);

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
