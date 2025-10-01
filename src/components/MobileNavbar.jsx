import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../images/logo2.png";
import cover from "../images/cover2.jpg";

const MobileNavbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

return ( <div className="sm:hidden relative">
{/* Navbar with Blur Style */} 
<div className="px-6 py-4 flex items-center bg-black/30 backdrop-blur-sm"> 
    <img src={logo} alt="logo" className="w-[30%]" />

    <div className="ml-auto flex items-center">
      {/* Hidden links on mobile, shown on sm+ */}
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

  {/* Slide-in menu */}
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
            About us
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

  {/* Cover image */}
  <img src={cover} alt="cover" className="w-full mt-[-18%] h-[28rem]" />

  {/* Hero text */}
  <div className="mt-[-68%] px-6 max-w-4xl pb-5">
    <p className="text-gray-500 text-base">EXPERTISE</p>
    <h1 className="text-[30px] font-bold text-white leading-snug">
      Reliable NDT and inspection solutions <br />
      ensuring safety and asset integrity.
    </h1>
    <div className="inline-flex items-center space-x-2 mt-5">
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-xl border-2 border-white hover:bg-white hover:text-black">
        <Link to="/services" className="text-white">
          →
        </Link>
      </button>
      <p className="text-white text-base">Explore our services</p>
    </div>
  </div>
</div>
);
};

export default MobileNavbar;
