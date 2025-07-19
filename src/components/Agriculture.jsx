import { useState } from "react"
import { useNavigate } from 'react-router-dom'
export default function Agriculture() {
  const navigate = useNavigate()
  return (
 <section id="agriculture" className="py-20 px-8 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/5 right-5 w-48 h-48 rounded-full bg-yellow-400/5 animate-pulse"></div>
        <div className="absolute bottom-1/10 left-5 w-36 h-36 rounded-full bg-blue-900/5 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 relative inline-block">
              Revolutionizing Agriculture with Drones
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-red-700 to-yellow-400 rounded-full"></span>
            </h2>
            
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Bhavyansh Aero Academy, we're transforming traditional farming methods with cutting-edge drone technology. 
              Our agricultural solutions help farmers increase yields while reducing costs and environmental impact.
            </p>
            
            <div className="space-y-4 mb-8">
              <FeatureItem 
                icon="fas fa-check-circle" 
                text="Precision spraying with up to 90% reduction in chemical usage" 
              />
              <FeatureItem 
                icon="fas fa-check-circle" 
                text="Crop health monitoring through multispectral imaging" 
              />
              <FeatureItem 
                icon="fas fa-check-circle" 
                text="Automated field mapping and analysis" 
              />
              <FeatureItem 
                icon="fas fa-check-circle" 
                text="Irrigation planning and water management" 
              />
            </div>
            
            <button 
              onClick={() => navigate('/agriculture-drones')}
              className="px-8 py-3 bg-gradient-to-r from-blue-900 to-red-700 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              <span className="btn-wave"></span>
              Learn About Our Agri-Drones
            </button>
          </div>
          
          <div className="relative">
            <div 
              className="h-96 rounded-xl bg-cover bg-center shadow-xl transform perspective-1000 rotate-y-0 hover:rotate-y-10 transition-transform duration-500"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
              }}
            ></div>
            
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-yellow-400 to-red-700 w-36 h-36 rounded-full flex items-center justify-center text-white font-bold shadow-xl animate-pulse">
              <div className="text-center">
                <div className="text-3xl">60%</div>
                <div>Cost Reduction</div>
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