import { useState } from "react";

export default function Internship() {
  const programs = [
    {
      duration: "1 Month",
      title: "Introductory Drone Program",
      benefits: [
        "Basics of drone operation",
        "Introduction to drone types and usage",
        "Flight safety fundamentals",
        "Hands-on mini drone practice"
      ],
    },
    {
      duration: "4 Months",
      title: "Advanced Drone Internship",
      benefits: [
        "Drone assembly and repair",
        "Flight mission planning",
        "Software integration & calibration",
        "Project-based assessments"
      ],
    },
    {
      duration: "6 Months",
      title: "Comprehensive Drone Certification",
      benefits: [
        "All advanced training modules",
        "Legal compliance and regulations",
        "Live industrial project",
        "Official internship certification"
      ],
    },
  ];

  return (
    <section id="internship" className="py-20 px-6 bg-gradient-to-r from-gray-800 to-gray-500 text-white relative">
      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/10 w-20 h-20 bg-yellow-300/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Drone Internship & Certification Programs</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Choose from beginner to professional programs tailored to different durations and goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <ProgramCard key={idx} program={program} />
          ))}
        </div>

        <button className="mt-12 px-8 py-3 bg-[#FFDB15] text-gray-900 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
          Apply Now
        </button>
      </div>
      
    </section>
    
  );
}

function ProgramCard({ program }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`bg-white/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-500 transform ${
        hover ? "scale-105 shadow-lg" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 className="text-xl font-bold mb-1">{program.title}</h3>
      <p className="text-sm text-white/70 italic mb-3">{program.duration} Program</p>
      <ul className="text-left text-white/90 space-y-2 text-sm">
        {program.benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-yellow-400">✓</span> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
