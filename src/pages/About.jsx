import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import about from '../assets/about.jpeg'
import { useNavigate } from 'react-router-dom'

export default function About() {

  const navigate = useNavigate()

const handleViewCourses = () => {
  navigate('/?scrollTo=courses')
}

  return (
    <div>
      <Navbar/>
    <section className="relative mt-6 bg-gray-50 text-gray-800 py-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto mt-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-6">
              Bhavyansh Aero Academy is India’s emerging leader in drone technology education and aerial services. We are dedicated to empowering students, professionals, and industries with cutting-edge UAV training, drone solutions, and real-world applications.
            </p>
            <p className="text-gray-600">
              Whether you're looking to start a career in drone operations or need customized aerial solutions for agriculture, surveillance, inspection, or mapping — we are your trusted partner.
            </p>
          </div>
          <img
            src={about}
            alt="Drone flying"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Mission Vision Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <i className="fas fa-bullseye text-3xl text-yellow-500 mb-4"></i>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Our Mission</h4>
            <p className="text-gray-600">
              To make drone education accessible, practical, and industry-aligned while promoting innovation and safety.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <i className="fas fa-eye text-3xl text-red-600 mb-4"></i>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Our Vision</h4>
            <p className="text-gray-600">
              To become the most trusted drone academy in India, producing skilled pilots and innovators who shape the aerial future.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <i className="fas fa-hands-helping text-3xl text-blue-700 mb-4"></i>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Our Values</h4>
            <p className="text-gray-600">
              Excellence, safety, integrity, innovation, and empowerment drive every course, service, and solution we deliver.
            </p>
          </div>
        </div>

        {/* Highlight */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Join the Bhavyansh Areo Academy
          </h3>
          <p className="text-gray-600 mb-6">
            More than just a training center — Bhavyansh Aero Academy is a hub for aerial excellence, where knowledge meets innovation. Let’s shape the skies together.
          </p>
          <button
            onClick={handleViewCourses}
            className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-full transition duration-300"
          >
            View Our Courses
          </button>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
