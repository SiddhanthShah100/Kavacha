import React from 'react';
// import { useEffect, useState } from 'react';
import './Home.css';
import About from '../About/About';
import Downloads from '../Download/Download';
import logo1 from '../../Images/KJSIT_logo.png';
import logo2 from '../../Images/mumbai_police_logo.png';
import logo3 from '../../Images/dummy_logo.png';
// import GeoFenceScreen from '../../Components/GeoFenceScreen';
// import MapContainer from '../../Components/MapContainer';
import ai_img from '../../Images/ai-model.png';

function Home() {
  return (
    <>
      <div id='home'>
      <p ></p>
      <div className='banner'/>
      <div className='logo1'>
        <div className='words'>This app is developed and collaborated with XYZ </div>
        <div className='mob'>
        <img src={logo1} alt={logo3} className='design'/>
        <img src={logo2} alt={logo3} className='design'/>
        <img src={logo3} alt={logo3} className='design'/>
        <img src={logo3} alt={logo3} className='design'/>
        </div>
      </div> 
      <div className='banner2'>
      <img src={ai_img} alt={logo3} className='ai-img'/>
      <div className='words2'>"Hello, my fellow women warriors! Today, I want to share with you my thoughts on an app that has become an essential companion in our journey towards empowerment and safety. This women's safety app is a beacon of hope, designed to lend a helping hand whenever we need it. Join me as I delve  into my experiences and views on this remarkable tool that puts women's safety at the forefront."</div>
      </div>
      {/* <div className='map'>
      {/* <GeoFenceScreen />
      <MapContainer
        style={{ width: '100%', height: '200px' }}
        google={window.google}
      /> 
      </div>*/}
      </div>
      <div id='download'><Downloads /></div>
      <div id='about'><About /></div>

    </>
  );
}

export default Home







  
