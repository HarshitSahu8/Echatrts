import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from './pages/About';

const Path: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Path;
