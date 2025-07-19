import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Courses from '../components/Courses'
import Agriculture from '../components/Agriculture'
import Internship from '../components/Internship'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import DroneIcon from '../components/DroneIcon'

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to section on load if query param is present
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const sectionId = params.get('scrollTo')

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })

          // Optional: remove query param from URL after scroll
          window.history.replaceState(null, '', '/')
        }
      }, 300) // Slight delay to ensure section is mounted
    }
  }, [location.search])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative font-sans bg-gray-100 text-gray-800 overflow-x-hidden">
      {/* Animated drone icons */}
      <DroneIcon top="20%" left="10%" delay="0s" />
      <DroneIcon top="40%" left="30%" delay="2s" duration="20s" />
      <DroneIcon top="70%" left="20%" delay="4s" duration="18s" />
      <DroneIcon top="30%" left="70%" delay="1s" duration="25s" />
      <DroneIcon top="60%" left="80%" delay="3s" />

      <Navbar />
      <Hero />
      <Services />
      <Courses />
      <Agriculture />
      <Internship />
      <Testimonials />
      <Contact />
      <Footer />


      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-24 right-8 z-50 bg-blue-900 text-white rounded-full w-12 h-12 text-lg flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:bg-blue-800 ${
          showScrollButton ? 'flex' : 'hidden'
        }`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  )
}
