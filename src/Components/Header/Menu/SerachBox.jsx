import React, { useContext, useState } from 'react';
import { CiSearch, CiLocationOn } from 'react-icons/ci';
import { DataAndInputRcvrContext } from '../../../App';

export const SerachBox = () => {
  const [inputext, setinputext] = useState('');
  const [contextt] = useContext(DataAndInputRcvrContext);
  return (
    <div className='my-6 flex'>
      <input
        value={inputext}
        onChange={e => setinputext(e.target.value)}
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
        <button className='px-1'>C</button>
        <p className='pt-[6px]'>|</p>
        <button className='px-1'>F</button>
      </div>
    </div>
  );
};
