import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/servicesData';
import survelliance from "../assets/survelliance.jpg"
import agriculture from "../assets/agronx.jpeg"
import commercial from "../assets/commercial.jpg"
import spare_parts from "../assets/spare_parts.png"

export default function DroneSales() {
  const service = servicesData.find(s => s.id === 'drone-sales');

  return (
    <>
      <Navbar />

      {/* Features Grid */}
      <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
            <span className="relative inline-block">
              Specialized Drone
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
            </span> Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Precision-engineered drones for every professional need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Agricultural Drones */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-48 bg-green-600 flex items-center justify-center">
              <img 
                src={agriculture} 
                alt="Drone parts" 
                className="w-full h-full object-cover"
              />
              {/* <i className="fas fa-seedling text-6xl text-white opacity-90"></i> */}
              
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Agricultural Drones</h3>
              <p className="text-gray-600 mb-4">
                Revolutionize your farming with precision agriculture technology that boosts yields and reduces costs.
              </p>
              <ul className="space-y-2 mb-6">
                {service.specs.find(spec => spec.title === 'Agricultural Drones').subFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Learn More
              </button> */}
            </div>
          </div>

          {/* Surveillance Drones */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-48 bg-blue-600 flex items-center justify-center">
              <img 
                src={survelliance} 
                alt="Drone parts" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Surveillance Drones</h3>
              <p className="text-gray-600 mb-4">
                Advanced security solutions with real-time monitoring and AI-powered threat detection.
              </p>
              <ul className="space-y-2 mb-6">
                {service.specs.find(spec => spec.title === 'Surveillance Drones').subFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Learn More
              </button> */}
            </div>
          </div>

          {/* Commercial Drones */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-48 bg-purple-600 flex items-center justify-center">
              <img 
                src={commercial} 
                alt="Drone parts" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Commercial Drones</h3>
              <p className="text-gray-600 mb-4">
                High-performance drones for professional photography, mapping, and industrial applications.
              </p>
              <ul className="space-y-2 mb-6">
                {service.specs.find(spec => spec.title === 'Commercial Drones')?.subFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check-circle text-purple-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                )) || (
                  <li className="text-gray-500">Features coming soon</li>
                )}
              </ul>
              {/* <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Spare Parts Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:w-1/2 p-8 md:p-12">
              <div className="inline-flex items-center bg-yellow-100 rounded-full px-4 py-2 mb-6">
                <i className="fas fa-box-open text-yellow-600 mr-2"></i>
                <span className="font-medium text-yellow-800">SPARE PARTS</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Genuine Parts & Accessories</h2>
              <p className="text-gray-600 mb-6">
                We stock authentic spare parts for all major drone brands, ensuring optimal performance and longevity for your equipment.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <i className="fas fa-check text-yellow-600"></i>
                  </div>
                  <span className="text-gray-700">Propellers</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <i className="fas fa-check text-yellow-600"></i>
                  </div>
                  <span className="text-gray-700">Batteries</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <i className="fas fa-check text-yellow-600"></i>
                  </div>
                  <span className="text-gray-700">Cameras</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <i className="fas fa-check text-yellow-600"></i>
                  </div>
                  <span className="text-gray-700">Controllers</span>
                </div>
              </div>
              
              {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center">
                Browse Parts Catalog
                <i className="fas fa-arrow-right ml-2"></i>
              </button> */}
            </div>
            <div className="lg:w-1/2 h-96 lg:h-auto">
              <img 
                src={spare_parts} 
                alt="Drone parts" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Guarantee */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Promise</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Unmatched support for your drone operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold">24-Hour Service</h3>
              </div>
              <p className="text-blue-100">
                Emergency repairs completed within 24 hours to minimize your downtime.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-certificate text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold">Certified Technicians</h3>
              </div>
              <p className="text-blue-100">
                Factory-trained experts using genuine parts for all repairs and maintenance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-headset text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold">Dedicated Support</h3>
              </div>
              <p className="text-blue-100">
                24/7 technical support for all your operational questions and concerns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Drone Models */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Drone Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of professional-grade drones for every application
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.specs.map((spec, index) => (
            <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={spec.image} 
                  alt={spec.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-full mr-3 ${index === 0 ? 'bg-green-100 text-green-600' : index === 1 ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                    <i className={spec.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{spec.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{spec.description}</p>
          
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 rounded-xl p-8 text-center">
             <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help Choosing the Right Drone?</h3>
             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
               Our drone experts are available to help you select the perfect equipment for your specific requirements.
             </p>
             <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
               <i className="fas fa-headset mr-2"></i>
               Contact Our Specialists
             </button>
           </div>

      <Footer />
    </>
  );
}