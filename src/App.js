// import { route, routes } from "react-router-do
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />} />
       
        {/* <Route path="details" element={<Details />} /> */}
      </Routes>
      <Hero />
      {/* <Details/> */}
    </div>
  );
}

export default App;
