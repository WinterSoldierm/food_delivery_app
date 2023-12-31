import React from "react";
import Header from "../../Components/Header/Header";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Cards from "../../Components/Cards/Cards";
import Card1 from "../../Components/Card/Card1";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Cards />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
