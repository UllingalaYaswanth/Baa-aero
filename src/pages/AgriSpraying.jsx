import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { servicesData } from '../data/servicesData'

export default function DroneSales() {
  const service = servicesData.find(s => s.id === 'agri-spraying')

  return (
    <>
      <Navbar />
      <div className="py-20 px-8 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{service.title}</h2>

          {/* Render service.features, service.specs, etc. */}
          {/* You already have this logic from before — reuse it here */}
            <>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 relative inline-block">
                How It Works
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
              </h3>
              
              <div className="relative max-w-3xl mx-auto my-8">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 transform -translate-x-1/2"></div>
                
                {service.timeline.map((item, index) => (
                  <TimelineItem 
                    key={index}
                    item={item}
                    position={index % 2 === 0 ? 'left' : 'right'}
                  />
                ))}
              </div>
            </>
        </div>
      </div>
      <Footer />
    </>
  )
}

function TimelineItem({ item, position }) {
  return (
    <div className={`relative w-full md:w-1/2 p-4 mb-8 ${position === 'left' ? 'md:left-0 md:text-right' : 'md:left-1/2'}`}>
      <div className="absolute top-4 w-4 h-4 rounded-full bg-red-700 transform -translate-x-1/2 left-1/2 md:left-0 md:left-auto md:right-0 md:translate-x-1/2"></div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-all duration-300">
        <h4 className="font-bold text-blue-900">{item.title}</h4>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  )
}
