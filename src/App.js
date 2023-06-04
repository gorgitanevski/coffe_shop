import { Route, Routes } from "react-router-dom";
import MainSection from "./sections/MainSection";
import AboutSection from "./sections/AboutSection";
import ShopSection from "./sections/ShopSection";
import ContactSection from "./sections/ContactSection";
import CheckDetals from "./sections/CheckDetals";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainSection />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/shop" element={<ShopSection />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/coffes/:id" element={<CheckDetals />} />
    </Routes>
  );
};

export default App;
