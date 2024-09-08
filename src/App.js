import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import MerchHome from './Pages/MerchHome';
import Merch from './Components/Merch'
import Register from './Pages/Register';
import OC from "./Pages/OC"
import Faci from "./Pages/Faci"
import Partners from './Pages/Partners'
import Gallery from './Pages/Gallery'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MerchHome" element={<MerchHome />} />
        <Route path="/MerchTest" element={<Merch />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/OC" element={<OC />} />
        <Route path="/Faci" element={<Faci />} />
        <Route path="/Partners" element={<Partners />} />
      </Routes>
    </Router>
  );
}

export default App;
