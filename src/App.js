import { Route, Routes } from "react-router-dom";
import MainSection from "./pages/MainSection";
import AboutSection from "./pages/AboutSection";
import ShopSection from "./pages/ShopSection";
import ContactSection from "./pages/ContactSection";
import CheckDetals from "./pages/CheckDetals";

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
