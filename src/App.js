// import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import QuotePage from './components/quote';
import NavBar from './components/Navbar';
import Home from './components/homePage';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
  </>
);

export default App;
