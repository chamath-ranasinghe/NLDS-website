import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import MerchHome from './Pages/MerchHome';
import Merch from './Components/Merch'

import Register from './Pages/Register';
import TempRegister from './Pages/TempRegister';

import OC from "./Pages/OC"
import Faci from "./Pages/Faci"
import Partners from './Pages/Partners'
import Gallery from './Pages/Gallery'
import ContactUs from './Pages/ContactUs'
import FAQ from './Pages/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MerchHome" element={<MerchHome />} />
        <Route path="/MerchTest" element={<Merch />} />
        {/* <Route path="/Register" element={<Register />} /> */}
        <Route path="/Register" element={<TempRegister />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/OC" element={<OC />} />
        <Route path="/Faci" element={<Faci />} />
        <Route path='/FAQ' element={<FAQ/>}/>
        {/* <Route path="/Partners" element={<Partners />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
