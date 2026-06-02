import React from "react";

import "./css/bootstrap.min.css";
import "./css/style.css";

import HomePage from "./pages/HomePage.js";
import ContactPage from "./pages/ContactPage.js";
import RegionsPage from "./pages/RegionsPage.js";
import NewsPage from "./pages/NewsPage.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

{
  /*allows navigation between pages */
}
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Header and Footer outsite off routes so its appear on every page */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </>
  );
}
{
  /*this exports the app component to it can be imported and rendered in index.js */
}
export default App;
