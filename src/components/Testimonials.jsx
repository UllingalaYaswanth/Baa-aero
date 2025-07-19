import { useState } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Agricultural Drone Pilot",
      quote: "The agricultural drone course at Bhavyansh Aero Academy completely transformed my farming business. I now cover more area in less time with precise spraying that saves me money on chemicals.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Patel",
      role: "Drone Photographer",
      quote: "The hands-on training and industry connections I gained through the internship program helped me launch my aerial photography business immediately after completion.",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Ankit Verma",
      role: "Drone Technician",
      quote: "The comprehensive curriculum covered everything from basic flight principles to advanced repair techniques. I was hired by a major drone service provider before I even graduated!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ]

  return (
    <section className="py-20 px-8 bg-gray-50 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative inline-block">
          What Our Students Say
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-red-700 to-yellow-400 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  const [hover, setHover] = useState(false)

  return (
    <div 
      className={`bg-white p-8 rounded-xl shadow-md transition-all duration-300 ${
        hover ? '-translate-y-2 shadow-lg' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 mr-4"
        />
        <div>
          <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      
      <p className="italic mb-6 relative">
        <i className="fas fa-quote-left text-yellow-400 text-xl absolute -top-4 -left-2 opacity-30"></i>
        {testimonial.quote}
        <i className="fas fa-quote-right text-yellow-400 text-xl absolute -bottom-4 -right-2 opacity-30"></i>
      </p>
      
      <div className="text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i}
            className={`fas ${i < Math.floor(testimonial.rating) ? 'fa-star' : testimonial.rating % 1 !== 0 && i === Math.floor(testimonial.rating) ? 'fa-star-half-alt' : 'fa-star'} ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          ></i>
        ))}
      </div>
    </div>
  )
}