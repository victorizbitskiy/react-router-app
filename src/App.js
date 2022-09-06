import React from 'react';
import { Routes, Route, Redirect, Navigate } from 'react-router-dom';
import { About, Contact, Events, Home, Products, Services } from './pages';
import { Whoops404 } from './utils/Whoops404';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path='services' element={<Services />} />
        </Route>
        <Route path="services" element={<Navigate to="/about/services" />} />
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
