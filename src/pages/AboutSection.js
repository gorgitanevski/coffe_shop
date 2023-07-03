import Navbar from "../features/navbar/Navbar";
import AboutUsCon from "../features/about/AboutUsCon";
import CoffeShopCon from "../features/shop/CoffeShopCon";
import MeetCeo from "../features/about/MeetCeo";

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
