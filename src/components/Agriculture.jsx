import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import droneBanner from '../assets/drone-banner.jpeg'; 

export default function Agriculture() {
  const navigate = useNavigate()
  
  return (
    <section id="agriculture" className="py-20 px-8 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/5 right-5 w-48 h-48 rounded-full bg-yellow-400/5 animate-pulse"></div>
        <div className="absolute bottom-1/10 left-5 w-36 h-36 rounded-full bg-blue-900/5 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 relative inline-block">
              Smart Farming with AGRONE-X
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              India's premier AGRONE-X series of agricultural drones combines cutting-edge aeronautical engineering with user-friendly operation, designed to maximize productivity in the field. These drones bring advanced technology directly to farmers, empowering efficient and precise agricultural practices.
            </p>
            
            <div className="space-y-4 mb-8">
              <FeatureItem 
                icon="fas fa-spray-can" 
                text="10L capacity spraying system with 4 modular nozzles" 
              />
              <FeatureItem 
                icon="fas fa-compress-alt" 
                text="Folding body design (600×600×500mm when folded)" 
              />
              <FeatureItem 
                icon="fas fa-battery-full" 
                text="18.1 minutes flight time with 22000mAh 6s battery" 
              />
              <FeatureItem 
                icon="fas fa-random" 
                text="Switch between spraying and spreading in 5 minutes" 
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/agriculture-drones')}
                className="px-8 py-3 bg-[#003B73] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              >
                <span className="btn-wave"></span>
                Explore AGRONE-X Drones
              </button>
            </div>
          </div>
          
          <div className="relative group">
            <div 
              className="h-96 rounded-xl bg-cover bg-center shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${droneBanner})`
              }}
            ></div>
            
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="bg-blue-900 text-white p-2 rounded-full mr-2">
                  <i className="fas fa-certificate"></i>
                </div>
                <div>
                  <div className="font-bold text-blue-900">DGCA Certified</div>
                  <div className="text-xs text-gray-500">Small Category</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, text }) {
  const [hover, setHover] = useState(false)

  return (
    <div 
      className={`flex items-center transition-all duration-300 ${hover ? 'translate-x-2' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <i className={`${icon} text-2xl mr-4 transition-colors duration-300 ${hover ? 'text-yellow-400' : 'text-red-700'}`}></i>
      <span className="font-medium">{text}</span>
    </div>
  )
}