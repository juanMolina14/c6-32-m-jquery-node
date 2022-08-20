// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Register from './components/Register/Register'
import Report from './components/Report/Report'
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />}
         />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/search"
          element={<Navbar />}
        />
        <Route
          path="/report"
          element={<Report />}
        />
        <Route
          path="/adopt"
          element={<Navbar />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/Register"
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
