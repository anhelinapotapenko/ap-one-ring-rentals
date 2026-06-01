import React from "react";

import "./css/bootstrap.min.css";
import "./css/style.css";

import HomePage from "./pages/HomePage.js";
import ContactPage from "./pages/ContactPage.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
