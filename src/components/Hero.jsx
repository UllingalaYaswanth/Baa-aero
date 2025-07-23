import { useState } from "react"
import herobg from '../assets/hero.mp4'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={herobg}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Animated drones */}
      <div className="absolute inset-0 top-60 left-40">
        <div 
          className="absolute top-1/5 left-1/10 w-24 h-24 bg-contain bg-no-repeat animate-float"
          style={{
            backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/1163/1163477.png)'
          }}
        />

      </div>
      <div className="absolute bottom-[34%] right-[14%]">
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