import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import logo from '../assets/baa-logo.png'
export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'internship', label: 'Internship' },
    { id: 'contact', label: 'Contact' },
    { id: 'about', label: 'About' },
  ]

  const handleNavClick = (id) => {
    setActiveLink(id)
    setIsMobileMenuOpen(false)

    if (id === 'about') {
      navigate('/about')
      return
    }

    if (location.pathname !== '/') {
      navigate(`/?scrollTo=${id}`)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <nav className="fixed top-0 w-full z-50 bg-[#232425] py-4 px-4 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div >
          <a href='/' className="flex items-center">
          <img 
            src={logo}
            alt="Logo" 
            className="h-12 mr-4 rounded-full transition-transform duration-500 hover:rotate-360"
          />
          <h1 className="text-white text-xl md:text-2xl font-bold text-shadow">
            Bhavyansh Aero Academy
          </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 relative">
          {navLinks.map(link =>
            link.id === 'services' ? (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <NavLink 
                  id={link.id}
                  label={link.label}
                  active={activeLink === link.id}
                  onClick={() => handleNavClick(link.id)}
                />
                {/* Dropdown */}
                <div className={`absolute left-0 top-full mt-2 w-72 bg-white text-black rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
                  isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                }`}>
                  {servicesData.map(service => (
                    <div
                      key={service.id}
                      onClick={() => {
                        setIsServicesOpen(false)
                        setIsMobileMenuOpen(false)
                        navigate(`/services/${service.id}`)
                      }}
                      className="px-4 py-3 hover:bg-blue-100 cursor-pointer flex items-center gap-3 transition"
                    >
                      <span>{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink 
                key={link.id}
                id={link.id}
                label={link.label}
                active={activeLink === link.id}
                onClick={() => handleNavClick(link.id)}
              />
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          className="md:hidden text-white focus:outline-none text-2xl"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 bg-blue-950/90 py-4 rounded-lg shadow-md">
          {navLinks.map(link => (
            link.id === 'services' ? (
              <div key={link.id}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="block w-full text-left text-white font-medium py-1"
                >
                  Services
                  <i className={`ml-2 fas fa-chevron-${isServicesOpen ? 'up' : 'down'}`}></i>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {servicesData.map(service => (
                      <button
                        key={service.id}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsServicesOpen(false)
                          navigate(`/services/${service.id}`)
                        }}
                        className="block w-full text-left text-white/90 hover:text-yellow-300 text-sm"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left text-white font-medium py-1 transition-all duration-300 ${
                  activeLink === link.id ? 'text-yellow-300' : ''
                }`}
              >
                {link.label}
              </button>
            )
          ))}
        </div>
      )}
    </nav>
  )
}

function NavLink({ id, label, active, onClick }) {
  const [hover, setHover] = useState(false)

  return (
    <button 
      onClick={onClick}
      className={`text-white font-medium relative py-1 transition-all duration-300 ${
        active ? 'text-yellow-300' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
      <span 
        className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
          hover || active ? 'w-full' : 'w-0'
        }`}
      />
    </button>
  )
}
