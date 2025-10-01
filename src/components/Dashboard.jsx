import Sectors from "./Sectors";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import cover from "../images/cover2.jpg";
import MobileNavbar from "./MobileNavbar.jsx";

const Dashboard = () => {
return (
<>
{/* Hero Section */} <div className="font-inter">
{/* Desktop/Laptop Background */}
<div
className="hidden sm:block relative w-full min-h-screen bg-center bg-cover"
style={{ backgroundImage: `url(${cover})` }}
>
{/* Navbar */} 
    <div className="relative z-10 p-4 md:p-10 flex flex-col md:flex-row items-start md:items-center"> 
      <img src={logo} alt="logo" className="w-[30%] max-w-[150px]" />
        <div className="md:ml-auto mt-2 md:mt-5">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6">
            <li className="text-white hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:text-gray-300">
              <Link to="/about-us">About us</Link>
            </li>
            <li className="text-white hover:text-gray-300">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-white hover:text-gray-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Content */}
      <div className="mt-16 md:mt-[10%] px-6 md:px-[5%] max-w-4xl">
        <p className="text-gray-400 text-base">EXPERTISE</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
          Reliable NDT and inspection solutions{" "}
          <br className="hidden md:block" />
          ensuring safety and asset integrity.
        </h1>
        <div className="inline-flex items-center space-x-2 mt-5">
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-xl border-2 border-white hover:bg-white hover:text-black">
            <Link to="/services" className="text-white hover:text-black">
              →
            </Link>
          </button>
          <p className="text-gray-300 text-base">Explore our services</p>
        </div>
      </div>
    </div>

    {/* Mobile Navbar + Hero */}
    <MobileNavbar />
  </div>

  {/* Section 2 */}
  <div className="bg-white mt-10 md:mt-[5%] px-6 md:px-12 py-12 font-inter">
    <hr className="mb-8" />
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Ensure asset integrity <br /> with confidence
        </h1>
      </div>

      {/* Right */}
      <div className="space-y-4 text-black text-base">
        <p>
          Quality Inspection and NDT Services provides precise and reliable
          Non-Destructive Testing (NDT) and inspection solutions across
          industries.
        </p>
        <p>
          Founded in 2025, we are trusted for maintaining safety, compliance,
          and performance in critical operations.
        </p>
        <p>
          We are a BBBEE Level 1 contributor, committed to empowerment and
          delivering lasting value.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-12 pt-4 items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center text-2xl rounded-full border-2 border-black hover:bg-black hover:text-white">
              <Link to="/about-us">→</Link>
            </button>
            <span>Learn more about us</span>
          </div>

          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center text-2xl rounded-full border-2 border-black hover:bg-black hover:text-white">
              <Link to="/contact">→</Link>
            </button>
            <span>Our Location</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Section 3 */}
  <div
    className="px-6 md:px-12 py-12 font-inter"
    style={{ backgroundColor: "#EAEAEA" }}
  >
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Delivering trusted inspection <br /> solutions with our clients
        </h1>
      </div>

      {/* Right */}
      <div className="space-y-4 text-black text-base">
        <p>
          Based in Durban, South Africa, Quality Inspection and NDT Services
          partners with clients across industries to ensure safety,
          compliance, and reliability in critical operations.
        </p>
        <p>
          We believe in building strong, collaborative relationships to
          achieve shared goals. Through our rigorous inspection systems,
          commitment to safety, and dedication to positive industry impact,
          we support clients in protecting assets, people, and the
          environment.
        </p>
      </div>
    </div>
  </div>

  {/* Sectors */}
  <Sectors />

  {/* Footer */}
  <Footer />
</>

);
};

export default Dashboard;
