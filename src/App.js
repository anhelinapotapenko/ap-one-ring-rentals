import React from "react";

import "./css/bootstrap.min.css";
import "./css/style.css";
import HomePage from "./pages/HomePage.js";
import Header from "./components/Header.js";

function App() {
  return (
    <>
      <Header />;
      <HomePage />
    </>
  );
}

export default App;
