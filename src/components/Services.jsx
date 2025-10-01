import { useState } from "react";
import { Link } from "react-router-dom";
import cover from "../images/ndt.jpg";
import Footer from "./Footer";
import { Menu, X } from "lucide-react";
import logo from "../images/logo2.png";

const Services = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-inter">
      <div
        className="relative w-full h-[45rem] bg-center bg-cover"
        style={{ backgroundImage: `url(${cover})` }}
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
                <Link to="/about-us">About us</Link>
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
              SERVICES
            </span>
            <div className="w-[4px] h-40 mt-8 md:h-60 bg-white"></div>
          </div>



         {/* Main text */}
          <div className="bg-black/70 p-4 md:p-6 lg:p-8 max-w-4xl mt-[25%] md:mt-0">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug md:leading-tight">
              Quality Inspection and NDT Services specializes in providing
              cutting edge Non-Destructive Testing (NDT) solutions to ensure
              structural integrity, safety, and regulatory compliance across
              diverse industries.
              <br />
              <br />
              Our team of certified professionals leverages industry best
              practices and state-of-the-art technology to identify potential
              defects before they pose risks to operational safety.
            </h1>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="font-inter bg-white text-gray-800 p-12 mt-[5%] rounded-2xl max-w-6xl mx-auto space-y-12">
        {/* Section: NDT Methods */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Core NDT Methods
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Magnetic Particle Inspection (MPI)
              </h3>
              <p className="text-lg leading-relaxed">
                MPI is a critical NDT method for detecting surface and
                near-surface defects in ferromagnetic materials. It is widely
                used in industries such as aerospace, automotive, and heavy
                manufacturing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Radiographic Testing (RT)
              </h3>
              <p className="text-lg leading-relaxed">
                Radiographic Testing employs X-ray or gamma-ray technology to
                examine the internal integrity of materials. It is commonly
                utilized in the oil and gas sector, power plants, and heavy
                industrial applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ultrasonic Thickness Testing (UT)
              </h3>
              <p className="text-lg leading-relaxed">
                UT uses high-frequency sound waves to measure material thickness
                and detect subsurface flaws. This testing method is crucial for
                industries focused on corrosion monitoring and pipeline
                inspection.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Wall Thickness Testing (WT)
              </h3>
              <p className="text-lg leading-relaxed">
                WT ensures the accurate measurement of material thickness to
                assess structural soundness. This inspection method is essential
                in construction, petrochemical, and marine industries.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Liquid Penetrant Inspection (LPI)
              </h3>
              <p className="text-lg leading-relaxed">
                LPI is an effective and economical NDT technique for detecting
                surface discontinuities in non-porous materials. It is widely
                applied in aerospace, weld inspections, and structural
                components.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Visual Inspection
              </h3>
              <p className="text-lg leading-relaxed">
                Visual Inspection is the fundamental NDT method that provides a
                first-line defense in quality assurance. Our trained inspectors
                assess welds, coatings, and structural components to detect
                visible defects.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Us?
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-6xl mx-auto mb-6">
            At Quality Inspection and NDT Services, we are committed to
            excellence.
            <br />
            Our certified specialists bring years of experience, ensuring that
            every inspection adheres to international standards.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg max-w-3xl mx-auto">
            <li>Highly skilled and certified NDT professionals.</li>
            <li>
              Strict adherence to international codes ASME, ISO, ASNT, ASTM,
              API.
            </li>
            <li>
              Advanced inspection technology for precise and reliable results.
            </li>
            <li>Rapid response times and on-site testing services.</li>
            <li>
              Customized solutions tailored to specific industry needs.
            </li>
          </ul>
        </div>

        {/* Section: Industries */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Industries We Serve
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg font-medium text-gray-700 text-center">
            <div className="p-4 border rounded-xl shadow-sm">
              Oil & Gas Industry
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              Automotive Manufacturing
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              Power Generation & Energy
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              Railway & Heavy Equipment
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              Petrochemical & Marine Sectors
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              Aerospace & Defense
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
