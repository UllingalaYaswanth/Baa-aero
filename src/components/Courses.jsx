import { useState } from "react"

export default function Courses() {
  const courses = [
    {
      title: "Basic Drone Pilot Course",
      icon: "fas fa-graduation-cap",
      description: "Learn the fundamentals of drone operation, safety protocols, and regulations in this comprehensive beginner course.",
      duration: "4 Weeks",
      fee: "₹15,000",
      gradient: "from-blue-900 to-red-700"
    },
    {
      title: "Advanced Drone Technology",
      icon: "fas fa-cogs",
      description: "Master advanced flight techniques, aerial photography, mapping, and industrial applications of drone technology.",
      duration: "8 Weeks",
      fee: "₹25,000",
      gradient: "from-red-700 to-yellow-400"
    },
    {
      title: "Agricultural Drone Applications",
      icon: "fas fa-leaf",
      description: "Specialized training in precision agriculture, crop spraying, monitoring, and data analysis using drone technology.",
      duration: "6 Weeks",
      fee: "₹20,000",
      gradient: "from-yellow-400 to-blue-900"
    }
  ]

  return (
    <section id="courses" className="py-20 px-8 bg-gradient-to-br from-gray-50 to-gray-200 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative inline-block">
          Drone Education Programs
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-900 via-red-700 to-yellow-400 rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course, index }) {
  const [hover, setHover] = useState(false)
  const [iconHover, setIconHover] = useState(false)

  return (
    <div 
      className={`bg-white rounded-xl p-8 text-center shadow-lg transition-all duration-500 transform-style-preserve-3d ${
        hover ? 'scale-103 shadow-xl' : ''
      } ${index % 2 === 0 ? 'hover:rotate-y-5' : 'hover:-rotate-y-5'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div 
        className={`transition-all duration-500 ${iconHover ? '-translate-y-3' : ''}`}
        onMouseEnter={() => setIconHover(true)}
        onMouseLeave={() => setIconHover(false)}
      >
        <i className={`${course.icon} text-5xl mb-4 text-yellow-400`}></i>
      </div>
      
      <h3 className="text-xl font-bold text-blue-900 mb-4">{course.title}</h3>
      <p className="text-gray-600 mb-6">{course.description}</p>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="mb-2">
          <i className="fas fa-clock mr-2"></i>
          Duration: {course.duration}
        </p>
        <p>
          <i className="fas fa-rupee-sign mr-2"></i>
          Fee: {course.fee}
        </p>
      </div>
      
      <button 
        className={`w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r ${course.gradient} transition-all duration-300 relative overflow-hidden ${
          hover ? '-translate-y-1' : ''
        }`}
      >
        <span className="btn-wave"></span>
        Enroll Now
      </button>
    </div>
  )
}