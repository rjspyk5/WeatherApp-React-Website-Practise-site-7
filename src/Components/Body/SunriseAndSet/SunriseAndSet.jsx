import React from 'react';
import { WiSunrise } from 'react-icons/wi';
import { WiSunset } from 'react-icons/wi';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

export const SunriseAndSet = () => {
  return (
    <div className='flex my-10 text-white justify-between'>
      <div className='flex'>
        <WiSunrise className='mx-3 mt-1' />
        <p>Rise :</p>
      </div>
      <p>|</p>
      <div className='flex justify-evenly'>
        <WiSunset className='mx-3 mt-1' />
        <p> Set :</p>
      </div>
      <p>|</p>
      <div className='flex'>
        <FaArrowUp className='mx-3 mt-1' />
        <p>High :</p>
      </div>
      <p>|</p>
      <div className='flex'>
        <FaArrowDown className='mx-3 mt-1' />
        <p>Low :</p>
      </div>
    </div>
  );
};
