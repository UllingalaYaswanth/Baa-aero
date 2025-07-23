// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { servicesData } from '../data/servicesData';

// export default function DroneSales() {
//   const service = servicesData.find(s => s.id === 'drone-sales');

//   return (
//     <>
//       <Navbar />
//       <div className="py-20 px-4 sm:px-8 bg-gray-50 min-h-screen">
//         <div className="max-w-7xl mx-auto">
//           {/* Hero Section */}
//           <div className="mb-8 mt-10 text-center">
//             <h2 className="text-3xl font-bold text-blue-900 mb-6">{service.title}</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Cutting-edge drone technology with comprehensive support and rapid service
//             </p>
//           </div>

//           {/* Main Features Grid */}
//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             {/* Agricultural Drones */}
//             <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="bg-green-100 p-3 rounded-full mr-4">
//                   <i className="fas fa-seedling text-2xl text-green-700"></i>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800">Agricultural Drones</h3>
//               </div>
//               <p className="text-gray-600 mb-6">
//                 Precision farming solutions that increase yield while reducing chemical usage and labor costs.
//               </p>
//               <div className="grid gap-4">
//                 {service.specs.find(spec => spec.title === 'Agricultural Drones').subFeatures.map((feature, i) => (
//                   <div key={i} className="flex items-start">
//                     <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
//                     <span className="text-gray-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6">
//                 <img 
//                   src="https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//                   alt="Agricultural Drone" 
//                   className="rounded-lg w-full h-48 object-cover"
//                 />
//               </div>
//             </div>

//             {/* Surveillance Drones */}
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="bg-blue-100 p-3 rounded-full mr-4">
//                   <i className="fas fa-shield-alt text-2xl text-blue-700"></i>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800">Surveillance Drones</h3>
//               </div>
//               <p className="text-gray-600 mb-6">
//                 Advanced security solutions with real-time monitoring and threat detection capabilities.
//               </p>
//               <div className="grid gap-4">
//                 {service.specs.find(spec => spec.title === 'Surveillance Drones').subFeatures.map((feature, i) => (
//                   <div key={i} className="flex items-start">
//                     <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
//                     <span className="text-gray-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6">
//                 <img 
//                   src="https://images.unsplash.com/photo-1606220945778-b6820e23cd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//                   alt="Surveillance Drone" 
//                   className="rounded-lg w-full h-48 object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Spare Parts Section */}
//           <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="md:flex">
//               <div className="md:w-1/2 p-8 md:p-12">
//                 <div className="flex items-center mb-6">
//                   <div className="bg-yellow-100 p-3 rounded-full mr-4">
//                     <i className="fas fa-box-open text-2xl text-yellow-600"></i>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800">Genuine Spare Parts</h3>
//                 </div>
//                 <p className="text-gray-600 mb-6">
//                   We maintain an extensive inventory of authentic spare parts for all major drone brands, ensuring your equipment stays operational.
//                 </p>
//                 <div className="grid sm:grid-cols-2 gap-4 mb-6">
//                   <div className="flex items-center">
//                     <i className="fas fa-check text-yellow-500 mr-2"></i>
//                     <span>Propellers & Motors</span>
//                   </div>
//                   <div className="flex items-center">
//                     <i className="fas fa-check text-yellow-500 mr-2"></i>
//                     <span>Batteries & Chargers</span>
//                   </div>
//                   <div className="flex items-center">
//                     <i className="fas fa-check text-yellow-500 mr-2"></i>
//                     <span>Cameras & Gimbals</span>
//                   </div>
//                   <div className="flex items-center">
//                     <i className="fas fa-check text-yellow-500 mr-2"></i>
//                     <span>Controllers & Receivers</span>
//                   </div>
//                 </div>
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
//                   View Parts Catalog
//                 </button>
//               </div>
//               <div className="md:w-1/2">
//                 <img 
//                   src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
//                   alt="Drone Parts" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Quick Service Section */}
//           <div className="mb-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
//             <div className="md:flex items-center">
//               <div className="md:w-2/3 mb-6 md:mb-0">
//                 <div className="flex items-center mb-4">
//                   <i className="fas fa-clock text-3xl mr-4"></i>
//                   <h3 className="text-2xl font-bold">24-Hour Rapid Service</h3>
//                 </div>
//                 <p className="mb-6 text-blue-100">
//                   Our certified technicians provide emergency repairs and maintenance with a guaranteed turnaround time of 24 hours or less for most services.
//                 </p>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div className="bg-blue-700/50 p-4 rounded-lg">
//                     <div className="flex items-center mb-2">
//                       <i className="fas fa-tools mr-2"></i>
//                       <span className="font-medium">Emergency Repairs</span>
//                     </div>
//                     <p className="text-sm text-blue-200">
//                       Priority service for critical repairs to minimize downtime
//                     </p>
//                   </div>
//                   <div className="bg-blue-700/50 p-4 rounded-lg">
//                     <div className="flex items-center mb-2">
//                       <i className="fas fa-battery-full mr-2"></i>
//                       <span className="font-medium">Battery Replacement</span>
//                     </div>
//                     <p className="text-sm text-blue-200">
//                       Same-day battery diagnostics and replacement
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="md:w-1/3 flex justify-center">
//                 <div className="bg-white/10 p-6 rounded-full border-2 border-white/20">
//                   <div className="text-center">
//                     <div className="text-4xl font-bold">24</div>
//                     <div className="text-lg">Hour</div>
//                     <div className="text-sm">Service Guarantee</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* All Drone Models */}
//           <div className="mb-16">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
//               Our Drone Models
//             </h3>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {service.specs.map((spec, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <img 
//                     src={spec.image} 
//                     alt={spec.title} 
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <div className="flex items-center mb-3">
//                       <i className={`${spec.icon} text-blue-600 mr-3`}></i>
//                       <h4 className="text-xl font-bold text-gray-800">{spec.title}</h4>
//                     </div>
//                     <p className="text-gray-600 mb-4">{spec.description}</p>
//                     {spec.subFeatures && (
//                       <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
//                         View Details
//                         <i className="fas fa-arrow-right ml-2"></i>
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Support Section */}
//           <div className="bg-gray-100 rounded-xl p-8 text-center">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help Choosing the Right Drone?</h3>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//               Our drone experts are available to help you select the perfect equipment for your specific requirements.
//             </p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
//               <i className="fas fa-headset mr-2"></i>
//               Contact Our Specialists
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }



import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/servicesData';

export default function DroneSales() {
  const service = servicesData.find(s => s.id === 'drone-sales');

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      {/* <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Premium drone solutions with cutting-edge technology and unparalleled support
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Models
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Features Grid */}
      <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Drone Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Precision-engineered drones for every professional need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Agricultural Drones */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-48 bg-green-600 flex items-center justify-center">
              <i className="fas fa-seedling text-6xl text-white opacity-90"></i>
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
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Surveillance Drones */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-48 bg-blue-600 flex items-center justify-center">
              <i className="fas fa-shield-alt text-6xl text-white opacity-90"></i>
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
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Commercial Drones */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-48 bg-purple-600 flex items-center justify-center">
              <i className="fas fa-business-time text-6xl text-white opacity-90"></i>
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
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Learn More
              </button>
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
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
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