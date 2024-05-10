import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { MainPage } from './components/Mainpage/MainPage';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path= "/search" element = {<MainPage />} />
      </Routes></div>
      </BrowserRouter>
   
  );
}
export default App;
