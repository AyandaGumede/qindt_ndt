import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ceo from "../images/ceo.jpg";
import cover from "../images/cover.png";
import Map from "../images/map.png";
import logo from "../images/logo2.png"; // make sure the path matches your project
import Footer from "./Footer";

const AboutUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-inter">
      {/* Hero Section */}
      <div
        className="w-full h-[30rem] sm:h-[35rem] lg:h-[45rem] relative"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Navbar */}
        <div className="px-6 py-4 flex items-center bg-black/30 backdrop-blur-sm relative z-50">
          <img src={logo} alt="logo" className="w-[30%] max-w-[150px]" />

          <div className="ml-auto flex items-center">
            {/* Desktop Links */}
            <ul className="hidden sm:flex gap-6">
              <li className="text-white hover:text-gray-300">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link to="/services">Services</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMenuOpen(true)}
              className="sm:hidden text-white ml-4"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Menu */}
        {menuOpen && (
          <div className="fixed top-0 right-0 w-2/3 h-full bg-black z-50 font-inter shadow-lg transition-transform duration-300">
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)}>
                <X size={28} className="text-white" />
              </button>
            </div>
            <ul className="flex flex-col items-start p-6 space-y-6 text-white text-lg">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* About Us Section in Hero */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 px-6 md:px-12 lg:px-20 mt-10 md:mt-20">
          {/* Vertical line + text */}
          <div className="hidden sm:flex flex-col mt-[20%] items-center">
            <span className="-rotate-90 tracking-[0.2em] text-xs md:text-sm font-bold text-white mb-4">
              ABOUT US
            </span>
            <div className="w-[4px] h-40 mt-8 md:h-60 bg-white"></div>
          </div>

          {/* Text */}
          <div className="bg-black/70 p-4 md:p-6 lg:p-8 max-w-3xl">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug md:leading-tight">
              Excellence isn’t optional, it’s who we are. At Quality Inspection
              and NDT Services, every inspection, every decision, and every
              action is forged with integrity, sharpened by precision, and
              powered by innovation.
            </h1>
            <p className="mt-4 font-medium text-gray-200 text-sm md:text-base">
              N. Ziqubu - Director
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="px-6 md:px-12 lg:px-20 py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Who We Are
        </h2>
        <div className="space-y-5 text-base md:text-lg leading-relaxed">
          <p>
            At Quality Inspection and NDT Services, we are a team of highly
            skilled professionals dedicated to delivering premium inspection and
            NDT services across Africa. We combine deep technical expertise with
            innovative methodologies to provide solutions that meet the highest
            standards of quality, safety, and compliance.
          </p>
          <p>
            Through strategic market expansion, continuous innovation, and
            strong partnerships with our clients, suppliers, and stakeholders,
            we capture emerging opportunities while fostering mutual growth.
            Employee development and engagement are central to our approach,
            ensuring the talent that drives our success is nurtured and
            empowered.
          </p>
          <p>
            As a BBBEE Level 1 contributor, we actively support diversity and
            empowerment, creating opportunities for previously disadvantaged
            individuals within our industry. Trust Quality Inspection and NDT
            Services to be your reliable partner in maintaining the performance,
            integrity, and longevity of your operations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 mt-12">
          {/* Image */}
          <div className="w-full sm:w-3/4 lg:w-1/3">
            <img
              src={ceo}
              alt="Nhlanhla Ziqubu"
              className="w-full h-[29rem] object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-2/3 text-black text-base mt-4 md:text-lg leading-relaxed">
            <p>
              Nhlanhla Ziqubu is a highly experienced and qualified professional
              in the field of Non-Destructive Testing (NDT) and the CEO and
              founder of Quality Inspection and NDT Services, established in
              2025. With an impeccable background as a Level 2 MT (Magnetic
              Testing), PT (Penetrant Testing), and UT (Ultrasonic Testing)
              technician, Nhlanhla has accumulated a wealth of knowledge and
              hands-on experience over the years, providing inspection services
              to various high-profile clients across multiple industries.
            </p>
            <p className="mt-4">
              His expertise spans the tankage industry, oil and gas sector,
              railways, and power stations, where he has played an integral role
              in ensuring the safety, integrity, and quality of critical
              infrastructure. Nhlanhla has an in-depth understanding of industry
              codes and standards, including ASME, API 650 (13th Edition), and
              AWS D1.1, which have been instrumental in guiding his inspections
              and ensuring compliance with global industry regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-6 md:px-12 lg:px-20 py-12 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          South African Based
        </h2>
        <img
          src={Map}
          alt="South Africa Map"
            className="w-full sm:w-3/4 md:w-1/2 mx-auto"
        />
      </div>

      {/* Values */}
      <div className="px-6 md:px-12 lg:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          OUR MISSION
        </h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed">
          <p>
            We are committed to delivering premium services while maintaining
            competitive pricing that ensures sustainable business growth.
          </p>
          <p>
            Through strategic market expansion and continuous innovation in our
            core competencies, we aim to capture emerging opportunities across
            the industry.
          </p>
          <p>
            We foster collaborative partnerships with our suppliers and
            stakeholders, creating mutual growth opportunities.
          </p>
          <p>
            Our commitment to employee development and engagement remains
            paramount, as we believe in nurturing talent that drives our
            success.
          </p>
          <p>
            We aspire to establish ourselves as Africa's premier NDT and
            inspection services provider, leveraging cutting-edge technology and
            innovative methodologies to deliver exceptional value to our clients
            across the continent.
          </p>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Key Value Propositions
        </h3>
        <div className="grid sm:grid-cols-2 gap-6 text-base md:text-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>State-of-the-art testing methodologies</li>
            <li>Advanced analytical techniques</li>
            <li>Enhanced Operational Excellence</li>
            <li>Optimization of quality control processes</li>
            <li>Implementation of safety-first protocols</li>
            <li>Maximization of operational efficiency</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Downtime Optimization</li>
            <li>Strategic maintenance planning</li>
            <li>Proactive equipment monitoring</li>
            <li>Cost-Effective Asset Management</li>
            <li>Data-driven decision support</li>
            <li>Long-term cost optimization</li>
            <li>Preventive Risk Management</li>
            <li>Early defect detection</li>
            <li>Comprehensive risk assessment</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
