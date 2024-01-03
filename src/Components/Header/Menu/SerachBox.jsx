import React, { useContext, useState } from 'react';
import { CiSearch, CiLocationOn } from 'react-icons/ci';
import { DataAndInputRcvrContext } from '../../../App';

export const SerachBox = () => {
  const [inputext, setinputext] = useState('');
  const [contextt, currentWeather, fivedayweatherr, Celcius, setCelcius] =
    useContext(DataAndInputRcvrContext);
  return (
    <div className='my-6 flex'>
      <input
        value={inputext}
        onChange={e => setinputext(e.target.value)}
        onKeyDown={event => event.key === 'Enter' && contextt(inputext)}
        className='placeholder:italic w-96 rounded-md px-5 py-2 w-4/6  sm:text-sm shadow-md focus:outline-green-400'
        type='text'
        placeholder=' Search Your Location Weather'
        name='search'
      />
      <button onClick={() => contextt(inputext)}>
        <CiSearch className='mx-2  hover:scale-125' fill='white' size={20} />
      </button>
      <button>
        <CiLocationOn className=' hover:scale-125' fill='white' size={20} />
      </button>

      <div className='flex ml-auto text-white'>
        <button
          className={`${Celcius && 'text-red-400'} px-1 font-bold`}
          onClick={() => setCelcius(true)}
        >
          C
        </button>
        <p className='pt-[6px]'>|</p>
        <button
          className={`${!Celcius && 'text-red-500'} px-1  font-bold`}
          onClick={() => setCelcius(false)}
        >
          F
        </button>
      </div>
    </div>
  );
};
