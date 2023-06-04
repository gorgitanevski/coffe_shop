import React from "react";
import Navbar from "../components/Navbar";
import AboutUsCon from "../components/AboutUsCon";
import CoffeShopCon from "../components/CoffeShopCon";
import MeetCeo from "../components/MeetCeo";
import Footer from "./Footer";

const AboutSection = () => {
  return (
    <section>
      <Navbar />
      <AboutUsCon />
      <CoffeShopCon />
      <MeetCeo />
      <Footer />
    </section>
  );
};

export default AboutSection;
