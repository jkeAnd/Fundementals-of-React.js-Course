import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";

//main app

function App () {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
