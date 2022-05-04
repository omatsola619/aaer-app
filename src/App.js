import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Forgot from "./pages/Forgot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Price from "./pages/Price";
import Darkmode from "./components/Darkmode";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="price" element={<Price />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
