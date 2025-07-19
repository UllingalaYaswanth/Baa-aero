import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AgriculturePage() {
  const navigate = useNavigate()

  const services = [
    {
      title: 'Precision Spraying',
      description: 'Our drone spraying services apply fertilizers with millimeter precision.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Crop Monitoring',
      description: 'Using multispectral imaging to provide detailed crop health reports.',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9aab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Field Mapping',
      description: 'Create accurate 3D maps of your fields for better planning.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ]

  const droneModels = [
    {
      name: 'AgriSpray X4',
      price: '₹250,000',
      specs: '10L tank capacity, 8-acre coverage',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'CropScan Pro',
      price: '₹350,000',
      specs: 'Multispectral imaging, 50MP camera',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'FieldMapper RTK',
      price: '₹450,000',
      specs: 'RTK precision, centimeter-level accuracy',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'AgriDrone Starter Kit',
      price: '₹150,000',
      specs: 'Perfect for small farms, basic spraying',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ]


  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 relative inline-block">
          Agricultural Drone Solutions
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-red-700 rounded-full"></span>
        </h2>
         <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 relative inline-block">
            Agricultural Drone Solutions
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-red-700 rounded-full"></span>
          </h2>

          <div className="relative h-96 rounded-xl overflow-hidden mb-8 flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
            }}
          >
            <h1 className="text-white text-3xl md:text-4xl text-center font-bold text-shadow">
              Transforming Agriculture with <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent font-bold">Drone Technology</span>
            </h1>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At Bhavyansh Aero Academy, we're at the forefront of agricultural drone technology, providing innovative solutions that help farmers increase yields, reduce costs, and minimize environmental impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block">
                Why Use Drones in Agriculture?
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400 hover:border-red-700 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-bold text-red-700 flex items-center">
                    <i className="fas fa-chart-line mr-2"></i>
                    Increased Productivity
                  </h4>
                  <p className="text-gray-600 mt-2">Drones can cover large fields quickly, allowing farmers to monitor crop health much faster.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400 hover:border-red-700 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-bold text-red-700 flex items-center">
                    <i className="fas fa-seedling mr-2"></i>
                    Precision Agriculture
                  </h4>
                  <p className="text-gray-600 mt-2">With advanced sensors, drones enable precise application of water and fertilizers.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-900 text-white p-4 rounded-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold flex items-center mb-4">
                  <i className="fas fa-tachometer-alt mr-2"></i>
                  Key Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">90%</div>
                    <p>Reduction in chemical usage</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">60%</div>
                    <p>Cost savings</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">10x</div>
                    <p>Faster field coverage</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">30%</div>
                    <p>Increase in crop yields</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-700 text-white p-4 rounded-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold flex items-center mb-2">
                  <i className="fas fa-calendar-check mr-2"></i>
                  Seasonal Applications
                </h3>
                <ul className="space-y-1">
                  <li><strong>Pre-Planting:</strong> Field mapping, soil analysis</li>
                  <li><strong>Growing Season:</strong> Crop health monitoring</li>
                  <li><strong>Harvest:</strong> Yield prediction</li>
                  <li><strong>Post-Harvest:</strong> Field analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block">
            Our Agricultural Drone Services
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div 
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="p-4">
                  <h4 className="font-bold text-red-700 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <button className="w-full py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block">
            Agricultural Drone Models
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {droneModels.map((drone, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div 
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${drone.image})` }}
                ></div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-blue-900 mb-1">{drone.name}</h4>
                  <p className="text-red-700 font-bold mb-1">{drone.price}</p>
                  <p className="text-gray-600 text-xs mb-2">{drone.specs}</p>
                  <button className="w-full py-1 bg-yellow-400 text-gray-800 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-red-700 p-8 rounded-lg text-center text-white animate-pulse">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Farming Operations?</h3>
            <p className="mb-6">Our agricultural drone experts are ready to help you select the perfect solution.</p>
            <button className="px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Get a Free Farm Assessment
            </button>
          </div>
        </div>s
      </div>
      <Footer/>
    </div>
  )
}