import { useState } from "react"

export default function Internship() {
  const benefits = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Practical Training',
      description: 'Work with actual drone equipment and software used in industry applications.'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Industry Mentors',
      description: 'Learn from experienced professionals with years of drone technology expertise.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certification',
      description: 'Earn a valuable certificate upon successful completion of the internship.'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Job Opportunities',
      description: 'Top performers may receive job offers or recommendations for employment.'
    }
  ]

  return (
    <section id="internship" className="py-20 px-8 bg-gradient-to-r from-blue-900 to-red-700 text-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/5 left-1/10 w-24 h-24 rounded-full bg-yellow-400/10 animate-float"></div>
        <div className="absolute bottom-1/3 right-15 w-36 h-36 rounded-full bg-white/10 animate-float delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Drone Technology Internship Program
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-full"></span>
        </h2>
        
        <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Gain hands-on experience in the exciting field of drone technology with our comprehensive internship program. 
          Work on real-world projects and build your career in this rapidly growing industry.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <InternshipBenefit 
              key={index}
              benefit={benefit}
            />
          ))}
        </div>
        
        <button className="mt-12 px-8 py-3 bg-yellow-400 text-gray-800 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden">
          <span className="btn-wave"></span>
          Apply for Internship
        </button>
      </div>
    </section>
  )
}

function InternshipBenefit({ benefit }) {
  const [hover, setHover] = useState(false)
  const [iconHover, setIconHover] = useState(false)

  return (
    <div 
      className={`bg-white/10 p-8 rounded-xl backdrop-blur-sm transition-all duration-500 transform-style-preserve-3d ${
        hover ? 'bg-white/20 -translate-y-2 rotate-x-5' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <i 
        className={`${benefit.icon} text-3xl mb-4 text-yellow-400 transition-all duration-300 ${
          iconHover ? 'rotate-12 scale-125' : ''
        }`}
        onMouseEnter={() => setIconHover(true)}
        onMouseLeave={() => setIconHover(false)}
      ></i>
      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
      <p className="text-white/80">{benefit.description}</p>
    </div>
  )
}