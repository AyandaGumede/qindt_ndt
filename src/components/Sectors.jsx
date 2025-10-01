import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import service1 from "../images/I2.jpg";
import service2 from "../images/I4.jpeg";
import service3 from "../images/I16.jpg";
import service4 from "../images/service5.jpg";
import service5 from "../images/ndt.jpg";

const Sectors = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true }); 
  }, []);

  const services = [
    { name: "Magnetic Particle Inspection", img: service2 },
    { name: "Ultrasonic Thickness Testing", img: service1 },
    { name: "Wall Thickness Testing", img: service3 },
    { name: "Liquid Penetrant Inspection", img: service4 },
    { name: "Visual Inspection", img: service5 },
  ];

  return (
    <div className="bg-black text-white px-8 py-16 overflow-hidden font-inter">
      <hr className="border-gray-700 mb-8" />

      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 pt-[5%]" data-aos="fade-up">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-white">
          At Quality Inspection and NDT Services, we specialise in providing advanced 
          non-destructive testing methods that help safeguard assets and ensure compliance 
          with the highest industry standards. 
          <br/>
          Our certified inspectors combine precision, 
          expertise, and innovation to deliver reliable results across sectors such as 
          rail, petrochemical, marine, energy, mining, and more.
        </p>
      </div>

      {/* Services Row */}
      {/* Services Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="w-full"
          >
            <div className="overflow-hidden rounded-[2px] w-full">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <h3 className="mt-3 text-sm">{service.name}</h3>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-end items-center space-x-4 mt-8" data-aos="fade-left">
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-xl hover:bg-white hover:text-black" style={{border: "2px solid"}}>
          <Link to="/services">→</Link>
        </button>
        <span className="font-medium">
          Explore Services
        </span>
      </div>
    </div>
  );
};

export default Sectors;
