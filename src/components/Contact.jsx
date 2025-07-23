import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 px-8 bg-white relative bg-[linear-gradient(135deg,_#f5f7fa_0%,_#c3cfe2_100%)]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/5 left-5 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative inline-block">
          Contact Us
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-red-700 to-yellow-400 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-red-700 mb-6 relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
            </h3>
            
            <p className="text-gray-600 mb-8">
              Have questions about our courses, services, or drone technology in general? 
              Our team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <ContactItem 
                icon="fas fa-map-marker-alt" 
                title="Address" 
                text="123 Drone Street, Tech City, India 560001" 
              />
              <ContactItem 
                icon="fas fa-phone-alt" 
                title="Phone" 
                text="+91 98765 43210" 
              />
              <ContactItem 
                icon="fas fa-envelope" 
                title="Email" 
                text="info@bhavyanshaero.com" 
              />
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-800 mb-4 relative inline-block">
                Follow Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
              </h4>
              
              <div className="flex space-x-4">
                
                <SocialIcon platform="twitter" />
                <SocialIcon platform="instagram" />
                <SocialIcon platform="linkedin" />
                
              </div>
            </div>
          </div>
          
          <div>
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-[#1a2a6c] text-white rounded-full font-bold hover:scale-102 transition-transform duration-300 relative overflow-hidden"
              >
                <span className="btn-wave"></span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, title, text }) {
  const [hover, setHover] = useState(false)

  return (
    <div 
      className={`flex items-start transition-all duration-300 ${hover ? 'translate-x-2' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <i className={`${icon} text-2xl mt-1 mr-4 transition-colors duration-300 ${hover ? 'text-yellow-400' : 'text-blue-900'}`}></i>
      <div>
        <h4 className="font-bold text-gray-800">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )
}

function SocialIcon({ platform }) {
  const platformData = {
    facebook: { icon: 'fab fa-facebook', color: 'hover:text-blue-600' },
    twitter: { icon: 'fab fa-twitter', color: 'hover:text-blue-400' },
    instagram: { icon: 'fab fa-instagram', color: 'hover:text-pink-600' },
    linkedin: { icon: 'fab fa-linkedin', color: 'hover:text-blue-700' },
    youtube: { icon: 'fab fa-youtube', color: 'hover:text-red-600' }
  }

  const [hover, setHover] = useState(false)

  return (
    <a 
      href="#"
      className={`text-2xl text-blue-900 transition-all duration-300 ${platformData[platform].color} ${hover ? 'transform -translate-y-1 scale-125' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <i className={platformData[platform].icon}></i>
    </a>
  )
}