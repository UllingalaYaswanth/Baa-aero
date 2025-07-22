import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { servicesData } from '../data/servicesData'

export default function Services() {
 
 const navigate = useNavigate()
  return (
    <section id="services" className="py-20 px-8 bg-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-12 h-12 rounded-full bg-yellow-400/10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
        <div className="absolute top-30 right-5 w-8 h-8 rounded-full bg-red-700/10 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
         <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Drone Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
            <span className="relative inline-block">
              Our Professional
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
            </span> Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Cutting-edge drone technology solutions tailored for your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              index={index}
              onClick={() => navigate(`/services/${service.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, onClick }) {
  const [hover, setHover] = useState(false)

  return (
    <div 
      className={`bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform-style-preserve-3d ${
        hover ? 'transform -translate-y-2 rotate-y-6 shadow-xl' : ''
      } ${index % 2 === 0 ? 'hover:rotate-y-6' : 'hover:-rotate-y-6'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="h-48 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
            {/* <i className={`${service.icon} text-white text-4xl`}></i> */}
            <img 
          src={service.image} 
          alt={service.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hover ? 'scale-110' : 'scale-100'
          }`}
        />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-red-700 mb-3 relative inline-block">
          {service.title}
          <span className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
            hover ? 'w-full' : 'w-0'
          }`}></span>
        </h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <button 
          onClick={onClick}
          className={`px-5 py-2 rounded-md bg-gradient-to-br ${service.gradient} text-white font-medium transition-all duration-300 relative overflow-hidden ${
            hover ? 'transform -translate-y-1' : ''
          }`}
        >
          <span className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 ${
            hover ? 'left-0' : '-left-full'
          }`}></span>
          Learn More
        </button>
      </div>
    </div>
  )
}

function SectionHeading({ title }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative inline-block">
      {title}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-red-700 to-yellow-400 rounded-full"></span>
    </h2>
  )
}