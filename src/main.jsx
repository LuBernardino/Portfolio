import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import '/public/favicon/favicon-32x32.png';

import "./index.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project/:id" element={<Projects />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
