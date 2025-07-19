import { useState } from "react"

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }}
    >
      {/* Animated drones */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/5 left-1/10 w-24 h-24 bg-contain bg-no-repeat animate-float"
          style={{
            backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/1163/1163477.png)'
          }}
        />
        <div 
          className="absolute top-3/5 right-7/10 w-36 h-36 bg-contain bg-no-repeat animate-float"
          style={{
            backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/1163/1163477.png)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow animate__animated animate__fadeInDown">
          Pioneering Drone Technology
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto text-shadow animate__animated animate__fadeIn animate__delay-300ms">
          Empowering the future with cutting-edge drone solutions for education, agriculture, and industry.
        </p>
        
        <div className="animate__animated animate__fadeInUp animate__delay-600ms">
          <HeroButton primary text="Explore Courses" className="mr-4" />
          <HeroButton text="Contact Us" outline />
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
      >
        <i className="fas fa-chevron-down text-white text-3xl"></i>
      </div>
    </section>
  )
}

function HeroButton({ primary, outline, text, className = '' }) {
  const [hover, setHover] = useState(false)

  return (
    <button 
      className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden ${
        primary ? 'bg-yellow-400 text-gray-800' : 
        outline ? 'bg-transparent border-2 border-white text-white' : ''
      } ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span 
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 ${
          hover ? 'left-0' : '-left-full'
        }`}
      />
      {text}
    </button>
  )
}