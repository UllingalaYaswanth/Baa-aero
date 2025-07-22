import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/servicesData';

export default function AgriSprayingPage() {
  const service = servicesData.find(s => s.id === 'agri-spraying');

  return (
    <>
      <Navbar />
      <div className="py-20 px-8 bg-gray-100 min-h-screen animate__animated animate__fadeIn">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mt-10 font-bold text-[#1a2a6c] mb-6 inline-block relative">
            {service.title}
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] rounded bg-gradient-to-r from-[#1a2a6c] to-[#b21f1f]"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={service.image}
                alt="Agricultural Spraying"
                className="w-full rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <p className="mb-6 text-gray-700">
                Our agricultural drone spraying services revolutionize traditional farming methods by providing precise,
                efficient, and cost-effective crop treatment solutions. With our advanced drone technology, we can cover
                large areas quickly while using up to 90% less chemicals than traditional methods.
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
            How It Works
            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-yellow-400"></span>
          </h3>

          <div className="relative max-w-3xl mx-auto my-8">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400 transform -translate-x-1/2"></div>
            {service.timeline.map((item, index) => (
              <TimelineItem key={index} item={item} position={index % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>

          <h3 className="text-2xl font-bold text-[#1a2a6c] mb-6 inline-block relative">
            Benefits of Drone Spraying
            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-yellow-400"></span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <i className={`${benefit.icon} text-3xl text-[#b21f1f] mb-4`}></i>
                <h4 className="text-lg font-semibold text-[#1a2a6c] mb-2">{benefit.title}</h4>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="cta-section text-center py-12 px-6 rounded-lg bg-gradient-to-r from-[#1a2a6c] to-[#b21f1f] text-white">
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

function TimelineItem({ item, position }) {
  return (
    <div className={`relative w-full md:w-1/2 p-4 mb-8 ${position === 'left' ? 'md:pl-0 md:pr-10 md:text-right' : 'md:pl-10 md:pr-0 md:ml-auto'}`}>
      <div className="absolute top-4 w-4 h-4 rounded-full bg-[#b21f1f] transform -translate-x-1/2 left-1/2 md:left-auto md:right-0 md:translate-x-1/2"></div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-all duration-300">
        <h4 className="font-bold text-[#1a2a6c] mb-2">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </div>
  );
}