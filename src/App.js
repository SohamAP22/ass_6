import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Profile from './routes/Profile'
import Submit from './routes/Submit'
import React from 'react';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Profile/>}/>
      <Route path="/submit" element={<Submit/>}/>
    </Routes>
    </div>
  );
}

export default App;
