import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { servicesData } from '../data/servicesData'

export default function DroneSales() {
  const service = servicesData.find(s => s.id === 'drone-sales')

  return (
    <>
      <Navbar />
      <div className="py-20 px-8 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{service.title}</h2>
          <>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block">
                Our Drone Models
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {service.specs.map((spec, index) => (
                  <div 
                    key={index}
                    className="bg-blue-900/5 p-4 rounded-lg text-center transition-all duration-300 hover:bg-blue-900/10 hover:scale-103"
                  >
                    <i className={`${spec.icon} text-3xl text-blue-900 mb-2`}></i>
                    <h4 className="font-bold text-blue-900">{spec.title}</h4>
                    <p className="text-sm text-gray-600">{spec.description}</p>
                  </div>
                ))}
              </div>
            </>
        </div>
      </div>
      <Footer />
    </>
  )
}
