import React from "react";
import Header from "../Components/Header/Header";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import Card from "../Components/Card/Card";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
