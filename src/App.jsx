import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Header from "./Components/Header/Header";

function App() {

  return (
    <>
      <Header />
      <HeroBanner />
    </>
  );
}

export default App;