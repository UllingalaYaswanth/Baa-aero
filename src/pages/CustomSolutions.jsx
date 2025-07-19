import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { servicesData } from '../data/servicesData'

export default function DroneSales() {
  const service = servicesData.find(s => s.id === 'custom-solutions')

  return (
    <>
      <Navbar />
      <div className="py-20 px-8 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{service.title}</h2>
          <>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block">
                Industries We Serve
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.industries.map((industry, index) => (
                  <div 
                    key={index}
                    className="bg-blue-900/5 p-4 rounded-lg transition-all duration-300 hover:bg-blue-900/10 hover:shadow-md hover:-translate-y-1"
                  >
                    <i className={`${industry.icon} text-2xl text-red-700 mr-2`}></i>
                    <h4 className="inline-block font-bold text-blue-900">{industry.title}</h4>
                    <p className="text-gray-600 mt-2">{industry.description}</p>
                  </div>
                ))}
                <div className="bg-gradient-to-r from-blue-900 to-red-700 p-8 rounded-lg text-center text-white animate-pulse">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6">Contact our team today to discuss your requirements.</p>
                  <button className="px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                    Contact Sales Team
                  </button>
                </div>
              </div>
            </>
        </div>
      </div>
      <Footer />
    </>
  )
}
