import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Home from '../Home/Home';
import Download from '../Download/Download';
import About from '../About/About'; 
import DeleteAccount from '../Account/DeleteAccount';
import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Footer from '../../Components/footer';


function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
      <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/download' element ={<Download/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/deleteAccount' element ={<DeleteAccount />} />
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
