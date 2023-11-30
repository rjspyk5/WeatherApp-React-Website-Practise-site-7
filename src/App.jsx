import React, { createContext, useEffect, useState } from 'react';
import { MainFooter } from './Components/Footer/MainFooter';
import { MainBody } from './Components/Body/Mainbody';
import { MainHeader } from './Components/Header/MainHeader';
export const DataAndInputRcvrContext = createContext();

function App() {
  const [countryname, setcountryname] = useState('london');

  const contextt = dat => {
    setcountryname(dat);
    console.log(dat);
  };

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${countryname}&appid=ca946eaa34591a75c28c0222a15e2e36`
    )
      .then(response => response.json())
      .then(json => {
        fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${json[0].lat}&lon=${json[0].lan}&appid=ca946eaa34591a75c28c0222a15e2e36`
        )
          .then(response => response.json())
          .then(json => console.log(json));
      });
  }, [contextt]);

  return (
    <div className=' bg-gradient-to-tr from-[#080839] to-[#1C9AB9]  mx-auto h-screen px-5 py-5 shadow-xl bg-slate-800-gray-900'>
      <div className=' md:px-24 lg:px-56'>
        <DataAndInputRcvrContext.Provider value={[contextt]}>
          <MainHeader></MainHeader>
          <MainBody></MainBody>
          <MainFooter> </MainFooter>
        </DataAndInputRcvrContext.Provider>
      </div>
    </div>
  );
}

export default App;
