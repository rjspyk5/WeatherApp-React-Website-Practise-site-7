import React, { createContext, useEffect, useState } from 'react';
import { MainFooter } from './Components/Footer/MainFooter';
import { MainHeader } from './Components/Header/MainHeader';
import { currentTimeCalculator } from './Components/assetsAndFunction/CurrentTimeCalculator';
import { Body } from './Components/Body/Body';

export const DataAndInputRcvrContext = createContext();

function App() {
  const [countryname, setcountryname] = useState('Mehendiganj');
  const [countryDetails, setcountryDetails] = useState([]);
  const [currentWeather, setcurrentWeather] = useState([]);
  const [fivedayweatherr, setfivedayweatherr] = useState([]);
  const [Celcius, setCelcius] = useState(true);
  const [datanotfound, setdatanotfound] = useState(false);

  const contextt = data => {
    setcountryname(() => data);
  };

  useEffect(() => {
    setcountryDetails([]);
    setcurrentWeather([]);
    setfivedayweatherr([]);

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${countryname}&appid=ca946eaa34591a75c28c0222a15e2e36`
    )
      .then(response => response.json())
      .then(json => {
        setcountryDetails(json);
        fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${json[0].lat}&lon=${json[0].lon}&appid=ca946eaa34591a75c28c0222a15e2e36`
        )
          .then(response => response.json())
          .then(jsn => {
            setfivedayweatherr(jsn);
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${json[0].lat}&lon=${json[0].lon}&appid=ca946eaa34591a75c28c0222a15e2e36`
            )
              .then(response => response.json())
              .then(res => setcurrentWeather(res));
          });
        setdatanotfound(false);
      })
      .catch(() => setdatanotfound(true));
  }, [countryname]);

  const DateDaynameTime =
    currentWeather &&
    currentWeather.coord &&
    currentWeather.coord.lat &&
    currentTimeCalculator(
      currentWeather.timezone,
      currentWeather.coord.lat,
      currentWeather.coord.lon
    );

  return (
    <div
      style={{ fontFamily: 'Rajdhani' }}
      className=' bg-gradient-to-tr from-[#080839] to-[#1C9AB9]  mx-auto px-5 py-5 shadow-xl bg-slate-800-gray-900'
    >
      <div className=' md:px-24 lg:px-56'>
        <DataAndInputRcvrContext.Provider
          value={[
            contextt,
            currentWeather,
            fivedayweatherr,
            Celcius,
            setCelcius,
            countryname,
            DateDaynameTime,
            countryDetails,
            datanotfound,
          ]}
        >
          <MainHeader></MainHeader>
          <Body></Body>
          <MainFooter> </MainFooter>
        </DataAndInputRcvrContext.Provider>
      </div>
    </div>
  );
}

export default App;
