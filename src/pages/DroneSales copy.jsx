import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/servicesData';

export default function DroneSales() {
  const service = servicesData.find(s => s.id === 'drone-sales');

  return (
    <>
      <Navbar />
      <div className="py-20 px-4 sm:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-8 mt-10 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">{service.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge drone technology with comprehensive support and rapid service
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Agricultural Drones */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-seedling text-2xl text-green-700"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Agricultural Drones</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Precision farming solutions that increase yield while reducing chemical usage and labor costs.
              </p>
              <div className="grid gap-4">
                {service.specs.find(spec => spec.title === 'Agricultural Drones').subFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Agricultural Drone" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Surveillance Drones */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-shield-alt text-2xl text-blue-700"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Surveillance Drones</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Advanced security solutions with real-time monitoring and threat detection capabilities.
              </p>
              <div className="grid gap-4">
                {service.specs.find(spec => spec.title === 'Surveillance Drones').subFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1606220945778-b6820e23cd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Surveillance Drone" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Spare Parts Section */}
          <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <i className="fas fa-box-open text-2xl text-yellow-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Genuine Spare Parts</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We maintain an extensive inventory of authentic spare parts for all major drone brands, ensuring your equipment stays operational.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <i className="fas fa-check text-yellow-500 mr-2"></i>
                    <span>Propellers & Motors</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-yellow-500 mr-2"></i>
                    <span>Batteries & Chargers</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-yellow-500 mr-2"></i>
                    <span>Cameras & Gimbals</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check text-yellow-500 mr-2"></i>
                    <span>Controllers & Receivers</span>
                  </div>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  View Parts Catalog
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Drone Parts" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick Service Section */}
          <div className="mb-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <div className="flex items-center mb-4">
                  <i className="fas fa-clock text-3xl mr-4"></i>
                  <h3 className="text-2xl font-bold">24-Hour Rapid Service</h3>
                </div>
                <p className="mb-6 text-blue-100">
                  Our certified technicians provide emergency repairs and maintenance with a guaranteed turnaround time of 24 hours or less for most services.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-700/50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-tools mr-2"></i>
                      <span className="font-medium">Emergency Repairs</span>
                    </div>
                    <p className="text-sm text-blue-200">
                      Priority service for critical repairs to minimize downtime
                    </p>
                  </div>
                  <div className="bg-blue-700/50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-battery-full mr-2"></i>
                      <span className="font-medium">Battery Replacement</span>
                    </div>
                    <p className="text-sm text-blue-200">
                      Same-day battery diagnostics and replacement
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white/10 p-6 rounded-full border-2 border-white/20">
                  <div className="text-center">
                    <div className="text-4xl font-bold">24</div>
                    <div className="text-lg">Hour</div>
                    <div className="text-sm">Service Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Drone Models */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Our Drone Models
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.specs.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img 
                    src={spec.image} 
                    alt={spec.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <i className={`${spec.icon} text-blue-600 mr-3`}></i>
                      <h4 className="text-xl font-bold text-gray-800">{spec.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-4">{spec.description}</p>
                    {spec.subFeatures && (
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        View Details
                        <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
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
        </div>
      </div>
      <Footer />
    </>
  );
}