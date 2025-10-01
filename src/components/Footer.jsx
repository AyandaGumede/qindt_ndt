import {  FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../images/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black font-inter">
      {/* Social Links */}
      <div className="text-center py-10 border-b border-gray-300">
        <p className="uppercase tracking-widest text-gray-500 text-sm mb-6">
          Connect with us
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          
          <a href="mailto:qualityinspectionndtservices@gmail.com" className="flex flex-col items-center space-y-2 hover:text-gray-600">
            <FaEnvelope size={24} />
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>

      {/* Main Footer Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-16 py-10 border-b border-gray-300">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-[30%] md:w-[20%]"/>

        {/* Links */}
        <div className="grid grid-cols-3 mt-5 sm:grid-cols-3 gap-x-8 gap-y-4 text-center md:text-left">
          <Link to="/about-us" className="hover:underline">About us</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-16 py-6 text-sm text-gray-500 space-y-2 md:space-y-0">
        <span>© 2025 Quality Inspection and NDT Services</span>
      </div>
    </footer>
  );
};

export default Footer;
