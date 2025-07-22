import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { servicesData } from '../data/servicesData'

export default function Services() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('all')
  
  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeTab)

  return (
    <section id="services" className="py-20 px-4 sm:px-8 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-blue-600/5 animate-float"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-emerald-500/5 animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-blue-600/5 animate-float-delay-2"></div>
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
        
        {/* Service category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'photography', 'mapping', 'agriculture', 'industrial'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
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
      className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${
        hover ? 'transform -translate-y-3 shadow-2xl' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="h-60 relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hover ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}/90 flex items-end p-6`}>
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-lg mb-4">
            <i className={`${service.icon} text-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}></i>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-5">{service.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.slice(0, 2).map((feature, i) => (
            <span key={i} className="inline-flex items-center py-1 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              <i className={`${feature.icon} mr-2 text-blue-600`}></i>
              {feature.title}
            </span>
          ))}
        </div>
        
        <button 
          onClick={onClick}
          className={`w-full flex items-center justify-between px-5 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-medium transition-all ${
            hover ? 'shadow-lg' : 'shadow-md'
          }`}
        >
          <span>Explore Service</span>
          <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
      </div>
    </div>
  )
}