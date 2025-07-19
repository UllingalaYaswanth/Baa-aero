import { useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'internship', label: 'Internship' }
  ]

  const handleLinkClick = (id) => {
    if (location.pathname === '/') {
      // On homepage – scroll directly
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to homepage with query param
      navigate(`/?scrollTo=${id}`)
    }
  }

  return (
    <footer className="bg-blue-900 text-white py-12 px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/5 left-1/10 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-15 w-36 h-36 rounded-full bg-white/10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4 relative inline-block">
              Bhavyansh Aero Academy
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
            </h3>
            <p className="text-white/80">
              Pioneering drone technology education and services to empower the next generation of aerial innovators.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-left text-white/80 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
            </h4>
            <address className="not-italic space-y-2 text-white/80">
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Drone Street, Tech City, India
              </p>
              <p>
                <i className="fas fa-phone-alt mr-2"></i>
                +91 98765 43210
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i>
                info@bhavyanshaero.com
              </p>
            </address>
          </div>

          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-4 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
            </h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest updates on drone technology.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-r-lg hover:bg-yellow-500 transition-colors duration-300"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bhavyansh Aero Academy. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-white/80 hover:text-yellow-400 transition-colors duration-300 hover:-translate-y-1"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-white/80 hover:text-yellow-400 transition-colors duration-300 hover:-translate-y-1"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
