import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/servicesData';

export default function CustomSolutionsPage() {
  const service = servicesData.find(s => s.id === 'custom-solutions');

  return (
    <>
      <Navbar />
      <div className="py-20 px-8 bg-gray-100 min-h-screen animate__animated animate__fadeIn">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mt-10 font-bold text-[#1a2a6c] mb-8 inline-block relative">
            {service.title}
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] rounded bg-gradient-to-r from-[#1a2a6c] to-[#b21f1f]"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={service.image}
                alt="Custom Solutions"
                className="w-full rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <p className="mb-6 text-gray-700">
                {service.description}
              </p>
              {service.features.map((feature, index) => (
                <div className="feature-card mb-4 p-4 rounded-lg border-l-4 border-yellow-400 bg-gray-100 shadow hover:shadow-md transition-all" key={index}>
                  <h3 className="text-xl font-semibold text-[#b21f1f] mb-2">
                    <i className={`${feature.icon} mr-2`}></i>
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#1a2a6c] mb-6 inline-block relative">
            Industries We Serve
            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-yellow-400"></span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {service.industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <i className={`${industry.icon} text-3xl text-[#b21f1f] mb-4`}></i>
                <h4 className="text-lg font-semibold text-[#1a2a6c] mb-2">{industry.title}</h4>
                <p className="text-gray-700 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-[#1a2a6c] mb-6 inline-block relative">
            Our Customization Process
            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-yellow-400"></span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#1a2a6c] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-[#1a2a6c]">{step.title}</h4>
                </div>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {service.gallery.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={img} alt={`Custom Drone ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>

          <div className="cta-section text-center py-12 px-6 rounded-lg bg-gradient-to-r from-[#1a2a6c] to-[#1a2a6c] text-white">
            <h3 className="text-2xl font-bold mb-4">{service.cta.title}</h3>
            <p className="mb-6">{service.cta.description}</p>
            <button
              className="px-6 py-3 bg-white text-[#1a2a6c] font-semibold rounded-full shadow-md hover:scale-105 transition-all"
            >
              {service.cta.buttonText}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}