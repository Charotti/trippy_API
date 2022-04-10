import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Restaurants from "./pages/Restaurants";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </BrowserRouter>
  );
}
