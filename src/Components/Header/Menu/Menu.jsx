import React, { useContext } from 'react';
import { SerachBox } from './SerachBox';
import { DataAndInputRcvrContext } from '../../../App';

export const Menu = () => {
  const [contextt] = useContext(DataAndInputRcvrContext);

  const cityname = [
    { id: 1, city: 'dhaka' },
    { id: 2, city: 'barisal' },
    { id: 3, city: 'Sylet' },
    { id: 4, city: 'Rajsahi' },
  ];

  return (
    <div>
      <div className='flex justify-between'>
        {cityname.map(element => (
          <button
            key={element.id}
            className=' text-zinc-50 hover:text-red-500 focus:text-green-400'
            onClick={() => contextt(element.city)}
          >
            {element.city[0].toUpperCase() + element.city.slice(1)}
          </button>
        ))}
      </div>
      <SerachBox></SerachBox>
    </div>
  );
};
