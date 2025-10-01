import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
