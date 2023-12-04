import React, { useContext } from 'react';
import { DataAndInputRcvrContext } from '../../../App';

export const TimeAndCountry = () => {
  const [, currentWeather, fivedayweatherr] = useContext(
    DataAndInputRcvrContext
  );
  const countryname = currentWeather.name;
  return (
    <>
      <div className='flex text-center text-white'>
        <p className='mx-auto opacity-50'>
          Tuesday, 31 May 2023 | Local time : 11:24 AM
        </p>
      </div>
      <h3 className='text-center text-white font-bold my-6'>
        {countryname ? countryname : 'London,GB'}
      </h3>
      <p className='text-[#34ebe1] text-center my-6'>Clouds</p>
    </>
  );
};
