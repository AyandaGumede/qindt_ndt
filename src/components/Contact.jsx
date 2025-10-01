import { useState, useRef, useEffect } from "react";
import cover from "../images/I5.jpg";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../images/logo2.png";


const LazyBackground = ({ src, className, children }) => {
  const ref = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = src;
          img.onload = () => setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [src]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage: loaded ? `url(${src})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-inter">
      <LazyBackground
        src={cover}
        className="relative w-full h-[45.6rem]"
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

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 px-6 md:px-12 lg:px-20 mt-10 md:mt-20">
          {/* Vertical line + text */}
          <div className="hidden sm:flex flex-col mt-[20%] items-center">
            <span className="-rotate-90 tracking-[0.2em] text-xs md:text-sm font-bold text-black mb-4">
              CONTACT
            </span>
            <div className="w-[6px] h-40 mt-8 md:h-[13.4rem] bg-black"></div>
          </div>

          {/* Text */}
          <div className="bg-black/70 p-6 md:p-6 lg:p-8 max-w-3xl">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug md:leading-tight">
              86 Johannes Nkosi Street<br />
              Durban Central<br />
              4001
            </h1>
            <p className="mt-4 font-medium text-gray-200">
              <b>Tel: </b>+27 82 777 24 82
            </p>
            <p className="mt-4 font-medium text-gray-200">
              <b>Company Reg Number: </b>2025/063295/07
            </p>
            <p className="mt-4 font-medium text-gray-200">
              <b>Email: </b>
              <a
                href="mailto:qualityinspectionndtservices@gmail.com"
                className="text-blue-400"
              >
                qualityinspectionndtservices@gmail.com
              </a>
            </p>
          </div>
        </div>
      </LazyBackground>
    </div>
  );
};

export default Contact;
