// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register'
import Report from './components/Report/Report'
import Login from './components/Login/Login';
import Profile from './components/profile/Profile'
import Adopt from './components/Adopt/Adopt';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';



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
          element={<Search />}
        />
        <Route
          path="/report"
          element={<Report />}
        />
        <Route
          path="/adopt"
          element={<Adopt />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/Register"
          element={<Register />}
        />
        <Route

          path='/profile'
          element={<Profile />}
        />
       
        <Route
          path="/Footer"
          element={<Footer />}
        />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
