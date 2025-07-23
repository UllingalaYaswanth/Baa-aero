import { useState } from "react";

export default function Courses() {
  const courses = [
    {
      title: "Certified Associate in Drone Technologies (CADT)",
      eligibility: "10+2 and above. For engineering science students.",
      outcome:
        "Proficiency in drone fundamentals, regulations, drone-based technologies, and their applications in real-world use cases.",
      duration: "35 hours (Theory: 15 hrs, Practical: 20 hrs)",
      project: "Project Optional",
    },
    {
      title: "Certified Professional in Drone Technologies (CPDT)",
      eligibility: "CADT or 70%+ in CPDT entrance exam.",
      outcome:
        "In-depth knowledge of drone systems, payloads, design & development for various drone use cases.",
      duration: "100 hours (Theory: 50 hrs, Practical: 50 hrs)",
      project: "100 Hours Project",
    },
    {
      title: "Certified Trainer in Drone Technologies (CTDT)",
      eligibility: "CADT with 1 year experience or CPDT holders.",
      outcome:
        "Ability to train and educate others in drone technologies and structure content.",
      duration: "30 hours (Theory: 10 hrs, Practical: 20 hrs)",
    },
    {
      title: "Certified Expert in Drone Technologies (CEDT)",
      eligibility: "CPDT or CTDT with 2+ years of experience.",
      outcome:
        "Expertise in drone design and application for industries like manufacturing and automation.",
      duration: "150 hours (Theory: 50 hrs, Practical: 100 hrs)",
      project: "200 Hours Project",
    },
    {
      title: "Certified Master Trainer in Drone Technologies (CMTDT)",
      eligibility: "CEDT or CPDT with 5+ years experience.",
      outcome:
        "Advanced proficiency in training design and mentoring for drone-based learning modules.",
      duration: "60 hours (Theory: 20 hrs, Practical: 40 hrs)",
    },
    {
      title: "Certified Drone Scientist (CDS)",
      eligibility: "CEDT or CMTDT with 3+ years in drone R&D.",
      outcome:
        "Highest level of expertise in drone research and development with innovation and industry leadership.",
      duration: "Research Oriented (customized based on scope)",
    },
  ];

  return (
    <section id="courses"   className="py-14 px-8 relative bg-[linear-gradient(135deg,_#f5f7fa_0%,_#c3cfe2_100%)]">
      {/* Decorative Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
            <span className="relative inline-block">
              Drone Certification 
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
            </span> Programs
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
           Our drone courses equip you with practical skills for the growing drone tech industry.
          </p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl ${
        hover ? "-translate-y-2 shadow-lg" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="mb-6">
        <h4 className="font-bold text-blue-900 text-lg mb-1">
          {course.title}
        </h4>
        <div className="h-1 w-16 bg-yellow-400 rounded-full mb-4"></div>
      </div>

      <ul className="text-gray-700 text-sm space-y-3">
        <li>
          <strong>Eligibility:</strong> {course.eligibility}
        </li>
        <li>
          <strong>Outcome:</strong> {course.outcome}
        </li>
        <li>
          <strong>Duration:</strong> {course.duration}
        </li>
        {course.project && (
          <li>
            <strong>Project:</strong> {course.project}
          </li>
        )}
      </ul>
    </div>
  );
}
