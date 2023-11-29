import React from 'react';
import { MainFooter } from './Components/Footer/MainFooter';
import { MainBody } from './Components/Body/Mainbody';
import { MainHeader } from './Components/Header/MainHeader';

function App() {
  return (
    <div className=' bg-gradient-to-tr from-[#080839] to-[#1C9AB9]  mx-auto h-screen px-5 py-5 shadow-xl bg-slate-800-gray-900'>
      <div className=' md:px-24 lg:px-56'>
        <MainHeader></MainHeader>
        <MainBody></MainBody>
        <MainFooter> </MainFooter>
      </div>
    </div>
  );
}

export default App;
