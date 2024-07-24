// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './Products/ProductsList';
import CarSearch from './Dealer/Carsearch';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/dealer" element={<CarSearch />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
