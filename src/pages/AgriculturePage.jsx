import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AgriculturePage() {
  const navigate = useNavigate()

  // Using more relevant drone images
  const droneImages = {
    main: 'https://images.unsplash.com/photo-1624306777008-7a5a91d69278?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    spraying: 'https://images.unsplash.com/photo-1624306777008-7a5a91d69278?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    spreading: 'https://images.unsplash.com/photo-1624913503271-c0b04a46ea9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    hexacopter: 'https://images.unsplash.com/photo-1624913503271-c0b04a46ea9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    folded: 'https://images.unsplash.com/photo-1624913503271-c0b04a46ea9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }

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
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      icon: 'fas fa-map-marked-alt'
    }
  ]

  const features = [
    {
      title: 'Modular Design',
      description: 'Switch between spraying and spreading in just 5 minutes',
      icon: 'fas fa-random text-blue-900'
    },
    {
      title: 'Industrial Grade',
      description: 'Built by aeronautical engineers for reliability',
      icon: 'fas fa-cogs text-red-700'
    },
    {
      title: 'Folding Body',
      description: 'Compact transport (600×600×500mm folded)',
      icon: 'fas fa-compress-alt text-yellow-500'
    },
    {
      title: 'Extended Flight',
      description: '50% more flight time than competitors',
      icon: 'fas fa-clock text-green-600'
    }
  ]

  const specifications = [
    { name: 'Drone Type', value: 'Hexacopter', icon: 'fas fa-drone' },
    { name: 'Max Takeoff Weight', value: '24.9kg', icon: 'fas fa-weight' },
    { name: 'Payload Capacity', value: '10 liters', icon: 'fas fa-tint' },
    { name: 'Flight Time', value: '18.1 minutes', icon: 'fas fa-hourglass-half' },
    { name: 'Battery', value: '22000mAh 6s', icon: 'fas fa-battery-three-quarters' },
    { name: 'Range', value: '500 meters', icon: 'fas fa-expand' },
    { name: 'Nozzles', value: '4 (modular)', icon: 'fas fa-spray-can' },
    { name: 'Pump Capacity', value: '5 lit/min', icon: 'fas fa-tachometer-alt' }
  ]

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <div className="max-w-7xl mx-auto">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 relative inline-block">
            ARIES AGRONE-X Agricultural Drone
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-red-700 rounded-full"></span>
          </h2>

          {/* Hero Section with Drone Image */}
          <div className="relative rounded-xl overflow-hidden mb-8">
            <div className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${droneImages.main})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-2">AGRONE-X</h1>
                <p className="text-xl">India's Premier Agricultural Drone Solution</p>
                <div className="mt-4 flex space-x-2">
                  <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">10L Capacity</span>
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold">Hexacopter</span>
                  <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold">DGCA Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Intro */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">About ARIES Solutions</h3>
            <p className="text-gray-600 mb-4">
              India's first drone manufacturing company providing ingenious solutions making lives easier and safer. 
              Backed by aeronautical engineers and experienced IT professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Our Vision</h4>
                <p className="text-gray-600">Creating ideal solutions and bringing them to common people through cutting edge innovations</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-700 mb-2">Our Expertise</h4>
                <p className="text-gray-600">Rich experience in aviation (UAV), manufacturing and IT solutions for agriculture and beyond</p>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block">
            AGRONE-X Features
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className={`text-3xl mb-3 ${feature.icon}`}></div>
                <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block">
            Technical Specifications
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
          </h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-start">
                  <div className={`text-2xl mr-3 mt-1 ${spec.icon}`}></div>
                  <div>
                    <h4 className="font-bold text-gray-700">{spec.name}</h4>
                    <p className="text-gray-600">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">DGCA Category: Small</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Dimensions: 1300×1300×550mm</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Weight: 9.8kg (without battery)</span>
              </div>
            </div>
          </div>

          {/* Image Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${droneImages.hexacopter})` }}></div>
              <div className="p-4">
                <h4 className="font-bold text-blue-900">Hexacopter Design</h4>
                <p className="text-gray-600 text-sm">Unfolded dimensions: 1300×1300×550mm</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${droneImages.folded})` }}></div>
              <div className="p-4">
                <h4 className="font-bold text-blue-900">Folding Mechanism</h4>
                <p className="text-gray-600 text-sm">Folded dimensions: 600×600×500mm for easy transport</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block">
            AGRONE-X Capabilities
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="p-4">
                  <div className={`text-2xl ${service.icon} mb-2 text-blue-900`}></div>
                  <h4 className="font-bold text-lg mb-1">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <button className="text-sm text-blue-900 font-semibold hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900 to-red-700 rounded-xl overflow-hidden mb-8">
            <div className="p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Farming?</h3>
              <p className="mb-6 max-w-2xl mx-auto">Our team of aeronautical engineers will help you implement the perfect drone solution for your agricultural needs.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-100 transition-all">
                  Request Demo
                </button>
                <button className="px-6 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Contact ARIES Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-700 mb-2">Headquarters</h4>
                <p className="text-gray-600">#5-9-262/2/17/1, Rajiv Gandhi Nagar, I.E<br/>
                Kukatpally, Hyderabad, Telangana<br/>
                India - 500072</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 mb-2">Contact Details</h4>
                <p className="text-gray-600 mb-1">
                  <i className="fas fa-phone-alt mr-2 text-blue-900"></i> 
                  +91 8309156769 / 040-23714599
                </p>
                <p className="text-gray-600 mb-1">
                  <i className="fas fa-envelope mr-2 text-red-700"></i> 
                  info@ariessol.com
                </p>
                <p className="text-gray-600">
                  <i className="fas fa-globe mr-2 text-green-600"></i> 
                  www.ariessol.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}