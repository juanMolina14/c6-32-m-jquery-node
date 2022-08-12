// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Navbar />}
        />
        <Route
          path="/search"
          element={<Navbar />}
        />
        <Route
          path="/report"
          element={<Navbar />}
        />
        <Route
          path="/adopt"
          element={<Navbar />}
        />
        <Route
          path="/login"
          element={<Navbar />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
