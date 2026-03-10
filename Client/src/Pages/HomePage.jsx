import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Section/Banner";
import Footer from "../Components/Footer";
import Freebook from './../Components/Freebook';
import WelcomeFloat from "../Components/WelcomeFloat";

const HomePage = () => {
  

  return (
    <div
     
    >
      <Navbar  />
      <WelcomeFloat />
      <Banner />
      <Freebook/>
      <Footer />
    </div>
  );
};

export default HomePage;
