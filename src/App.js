import React from "react";

import "./css/bootstrap.min.css";
import "./css/style.css";
import HomePage from "./pages/HomePage.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
