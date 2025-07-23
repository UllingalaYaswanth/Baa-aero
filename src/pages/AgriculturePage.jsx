import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import agronx from '../assets/agronx.jpeg'
import agrispray from '../assets/agrispray.jpg'
import Granular from '../assets/Granular.png'
import agrox_open from '../assets/agrox-open.jpeg'
import agrox_fold from '../assets/agrox-fold.jpeg'
import field_analyze from '../assets/field-analyze.jpg'
import brochure from '../assets/drone-brochure.pdf'
export default function AgriculturePage() {
  const navigate = useNavigate();

  const droneImages = {
    main: agronx,
    spraying: agrispray,
    spreading: Granular,
    hexacopter: agrox_open,
    folded: agrox_fold
  };

  const services = [
    {
      title: 'Precision Spraying',
      description: '10L capacity spraying system with 4 nozzles for precise chemical application (2.5 lit/min discharge rate).',
      image: droneImages.spraying,
      icon: 'fas fa-spray-can'
    },
    {
      title: 'Granular Spreading',
      description: 'Specialized spreader system for uniform distribution of granular medicines and fertilizers.',
      image: droneImages.spreading,
      icon: 'fas fa-seedling'
    },
    {
      title: 'Field Analytics',
      description: 'Advanced flight controller with autonomous modes for field mapping and analysis.',
      image: field_analyze,
      icon: 'fas fa-map-marked-alt'
    }
  ];

  const features = [
    {
      title: 'Modular Design',
      description: 'Switch between spraying and spreading in just 5 minutes',
      icon: 'fas fa-random'
    },
    {
      title: 'Industrial Grade',
      description: 'Built by aeronautical engineers for reliability',
      icon: 'fas fa-cogs'
    },
    {
      title: 'Folding Body',
      description: 'Compact transport (600×600×500mm folded)',
      icon: 'fas fa-compress-alt'
    },
    {
      title: 'Extended Flight',
      description: '50% more flight time than competitors',
      icon: 'fas fa-clock'
    }
  ];

  const specifications = [
    { name: 'Drone Type', value: 'Hexacopter', icon: 'fas fa-drone' },
    { name: 'Max Takeoff Weight', value: '24.9kg', icon: 'fas fa-weight' },
    { name: 'Payload Capacity', value: '10 liters', icon: 'fas fa-tint' },
    { name: 'Flight Time', value: '18.1 minutes', icon: 'fas fa-hourglass-half' },
    { name: 'Battery', value: '22000mAh 6s', icon: 'fas fa-battery-three-quarters' },
    { name: 'Range', value: '500 meters', icon: 'fas fa-expand' },
    { name: 'Nozzles', value: '4 (modular)', icon: 'fas fa-spray-can' },
    { name: 'Pump Capacity', value: '5 lit/min', icon: 'fas fa-tachometer-alt' }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20 px-8 bg-gray-100 min-h-screen animate__animated animate__fadeIn">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mt-10 font-bold text-[#1a2a6c] mb-8 inline-block relative">
            AGRONE-X Agricultural Drone
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] rounded bg-gradient-to-r from-[#1a2a6c] to-[#b21f1f]"></span>
          </h2>

          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden mb-12">
            <img
              src={droneImages.main}
              alt="AGRONE-X Agricultural Drone"
              className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">AGRONE-X</h1>
              <p className="text-xl">India's Premier Agricultural Drone Solution</p>
              <div className="mt-4 flex space-x-2">
                <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">10L Capacity</span>
                <span className="bg-[#1a2a6c] text-white px-3 py-1 rounded-full text-sm font-bold">Hexacopter</span>
                <span className="bg-[#b21f1f] text-white px-3 py-1 rounded-full text-sm font-bold">DGCA Certified</span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <h3 className="text-2xl font-bold text-[#1a2a6c] mb-6 inline-block relative">
            AGRONE-X Features
            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-yellow-400"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <i className={`${feature.icon} text-3xl text-[#b21f1f] mb-4`}></i>
                <h4 className="text-lg font-semibold text-[#1a2a6c] mb-2">{feature.title}</h4>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <h3 className="text-2xl font-bold text-[#1a2a6c] mb-6 inline-block relative">
            Technical Specifications
            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-yellow-400"></span>
          </h3>
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start">
                  <i className={`${spec.icon} text-2xl text-[#b21f1f] mr-3 mt-1`}></i>
                  <div>
                    <h4 className="font-semibold text-[#1a2a6c]">{spec.name}</h4>
                    <p className="text-gray-700">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1a2a6c] text-white px-3 py-1 rounded-full text-sm">DGCA Category: Small</span>
                <span className="bg-[#b21f1f] text-white px-3 py-1 rounded-full text-sm">Dimensions: 1300×1300×550mm</span>
                <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm">Weight: 9.8kg (without battery)</span>
              </div>
            </div>
          </div>

          {/* Image Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={droneImages.hexacopter}
                alt="Hexacopter Design"
                className="w-full rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
              <h4 className="text-lg font-semibold text-[#1a2a6c] mt-4">Hexacopter Design</h4>
              <p className="text-gray-700 text-sm">Unfolded dimensions: 1300×1300×550mm</p>
            </div>
            <div>
              <img
                src= {droneImages.folded}
                alt="Folding Mechanism"
                className="w-full rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
              <h4 className="text-lg font-semibold text-[#1a2a6c] mt-4">Folding Mechanism</h4>
              <p className="text-gray-700 text-sm">Folded dimensions: 600×600×500mm for easy transport</p>
            </div>
          </div>

          {/* Services */}
          <h3 className="text-2xl font-bold text-[#1a2a6c] mb-6 inline-block relative">
            AGRONE-X Capabilities
            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-yellow-400"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <i className={`${service.icon} text-2xl text-[#b21f1f] mb-3`}></i>
                  <h4 className="text-lg font-semibold text-[#1a2a6c] mb-2">{service.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  {/* <button className="text-sm text-[#1a2a6c] font-semibold hover:underline flex items-center">
                    View Details <i className="fas fa-arrow-right ml-1"></i>
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}