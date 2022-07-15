import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
