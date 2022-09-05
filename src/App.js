import React from "react";

import {
  Navbars,
  Herosection,
  Timersection,
  Slidersection,
  Faqsection,
  Teamsection,
  Footer,
  Slidehead,
} from "./Components";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbars />
      <Herosection />
      <Timersection />
      <Slidehead/>
      <Slidersection />
      <Faqsection />
      <Teamsection />
      <Footer />
    </div>
  );
};

export default App;
