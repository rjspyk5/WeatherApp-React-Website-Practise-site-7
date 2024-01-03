import React from 'react';
import { FaGhost } from 'react-icons/fa';

export const Datanotfound = () => {
  return (
    <div className='mt-28 mb-36'>
      <FaGhost color='red' size={60} className='w-[100%]' />
      <h1 className='text-red-600 text-center text-3xl  md:text-5xl font-sans'>
        Sorry,Data not found
      </h1>
      <h2 className='text-white text-center text-2xl  md:text-4xl font-sans pt-2'>
        Try with another country or state name
      </h2>
    </div>
  );
};
