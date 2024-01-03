import React, { useContext } from 'react';
import { DataAndInputRcvrContext } from '../../App';
import { MainBody } from './Mainbody';
import { Datanotfound } from './Datanotfound';

export const Body = () => {
  const [, , , , , , , , datanotfound] = useContext(DataAndInputRcvrContext);
  return <div>{datanotfound ? <Datanotfound /> : <MainBody />}</div>;
};
