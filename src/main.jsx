import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project" element={<h1>PROJETO AQUI</h1>} />
      <Route path="/animeart" element={<h1>ANIME ART</h1>} />
      <Route path="/food_explorer" element={<h1>FOOD EXPLORER</h1>} />
      <Route path="/waterme" element={<h1>WATERME</h1>} />
      <Route path="/typeweather" element={<h1>TYPEWEATHER</h1>} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
