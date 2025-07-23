// import { useState } from "react";

// export default function Courses() {
//   const courses = [
//     {
//       title: "Certified Associate in Drone Technologies (CADT)",
//       eligibility: "10+2 and above. For engineering science students.",
//       outcome:
//         "Proficiency in drone fundamentals, regulations, drone-based technologies, and their applications in real-world use cases.",
//       duration: "35 hours (Theory: 15 hrs, Practical: 20 hrs)",
//       project: "Project Optional",
//     },
//     {
//       title: "Certified Professional in Drone Technologies (CPDT)",
//       eligibility: "CADT or 70%+ in CPDT entrance exam.",
//       outcome:
//         "In-depth knowledge of drone systems, payloads, design & development for various drone use cases.",
//       duration: "100 hours (Theory: 50 hrs, Practical: 50 hrs)",
//       project: "100 Hours Project",
//     },
//     {
//       title: "Certified Trainer in Drone Technologies (CTDT)",
//       eligibility: "CADT with 1 year experience or CPDT holders.",
//       outcome:
//         "Ability to train and educate others in drone technologies and structure content.",
//       duration: "30 hours (Theory: 10 hrs, Practical: 20 hrs)",
//     },
//     {
//       title: "Certified Expert in Drone Technologies (CEDT)",
//       eligibility: "CPDT or CTDT with 2+ years of experience.",
//       outcome:
//         "Expertise in drone design and application for industries like manufacturing and automation.",
//       duration: "150 hours (Theory: 50 hrs, Practical: 100 hrs)",
//       project: "200 Hours Project",
//     },
//     {
//       title: "Certified Master Trainer in Drone Technologies (CMTDT)",
//       eligibility: "CEDT or CPDT with 5+ years experience.",
//       outcome:
//         "Advanced proficiency in training design and mentoring for drone-based learning modules.",
//       duration: "60 hours (Theory: 20 hrs, Practical: 40 hrs)",
//     },
//     {
//       title: "Certified Drone Scientist (CDS)",
//       eligibility: "CEDT or CMTDT with 3+ years in drone R&D.",
//       outcome:
//         "Highest level of expertise in drone research and development with innovation and industry leadership.",
//       duration: "Research Oriented (customized based on scope)",
//     },
//   ];

//   return (
//     <section id="courses"   className="py-14 px-8 relative bg-[linear-gradient(135deg,_#f5f7fa_0%,_#c3cfe2_100%)]">
//       {/* Decorative Background Bubbles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
//         <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
//             <span className="relative inline-block">
//               Drone Certification 
//               <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
//             </span> Programs
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-600">
//            Our drone courses equip you with practical skills for the growing drone tech industry.
//           </p>
//         </div>
        

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, index) => (
//             <CourseCard key={index} course={course} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function CourseCard({ course }) {
//   const [hover, setHover] = useState(false);

//   return (
//     <div
//       className={`bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl ${
//         hover ? "-translate-y-2 shadow-lg" : ""
//       }`}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <div className="mb-6">
//         <h4 className="font-bold text-blue-900 text-lg mb-1">
//           {course.title}
//         </h4>
//         <div className="h-1 w-16 bg-yellow-400 rounded-full mb-4"></div>
//       </div>

//       <ul className="text-gray-700 text-sm space-y-3">
//         <li>
//           <strong>Eligibility:</strong> {course.eligibility}
//         </li>
//         <li>
//           <strong>Outcome:</strong> {course.outcome}
//         </li>
//         <li>
//           <strong>Duration:</strong> {course.duration}
//         </li>
//         {course.project && (
//           <li>
//             <strong>Project:</strong> {course.project}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// }




// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Courses() {
//   const courses = [
//     {
//       title: "Certified Associate in Drone Technologies (CADT)",
//       eligibility: "10+2 and above. For engineering science students.",
//       outcome:
//         "Proficiency in drone fundamentals, regulations, drone-based technologies, and their applications in real-world use cases.",
//       duration: "35 hours (Theory: 15 hrs, Practical: 20 hrs)",
//       project: "Project Optional",
//       hoverColor: "hover:bg-blue-50"
//     },
//     {
//       title: "Certified Professional in Drone Technologies (CPDT)",
//       eligibility: "CADT or 70%+ in CPDT entrance exam.",
//       outcome:
//         "In-depth knowledge of drone systems, payloads, design & development for various drone use cases.",
//       duration: "100 hours (Theory: 50 hrs, Practical: 50 hrs)",
//       project: "100 Hours Project",
//       hoverColor: "hover:bg-green-50"
//     },
//     {
//       title: "Certified Trainer in Drone Technologies (CTDT)",
//       eligibility: "CADT with 1 year experience or CPDT holders.",
//       outcome:
//         "Ability to train and educate others in drone technologies and structure content.",
//       duration: "30 hours (Theory: 10 hrs, Practical: 20 hrs)",
//       hoverColor: "hover:bg-purple-50"
//     },
//     {
//       title: "Certified Expert in Drone Technologies (CEDT)",
//       eligibility: "CPDT or CTDT with 2+ years of experience.",
//       outcome:
//         "Expertise in drone design and application for industries like manufacturing and automation.",
//       duration: "150 hours (Theory: 50 hrs, Practical: 100 hrs)",
//       project: "200 Hours Project",
//       hoverColor: "hover:bg-yellow-50"
//     },
//     {
//       title: "Certified Master Trainer in Drone Technologies (CMTDT)",
//       eligibility: "CEDT or CPDT with 5+ years experience.",
//       outcome:
//         "Advanced proficiency in training design and mentoring for drone-based learning modules.",
//       duration: "60 hours (Theory: 20 hrs, Practical: 40 hrs)",
//       hoverColor: "hover:bg-red-50"
//     },
//     {
//       title: "Certified Drone Scientist (CDS)",
//       eligibility: "CEDT or CMTDT with 3+ years in drone R&D.",
//       outcome:
//         "Highest level of expertise in drone research and development with innovation and industry leadership.",
//       duration: "Research Oriented (customized based on scope)",
//       hoverColor: "hover:bg-indigo-50"
//     },
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <section id="courses" className="py-14 px-8 relative bg-[linear-gradient(135deg,_#f5f7fa_0%,_#c3cfe2_100%)] overflow-hidden">
//       {/* Decorative Background Bubbles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div 
//           className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.1, 0.2, 0.1]
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         ></motion.div>
//         <motion.div 
//           className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10"
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.1, 0.15, 0.1]
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1
//           }}
//         ></motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-12">
//           <motion.h2 
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="relative inline-block">
//               Drone Certification 
//               <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
//             </span> Programs
//           </motion.h2>
//           <motion.p 
//             className="max-w-2xl mx-auto text-lg text-gray-600"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Our drone courses equip you with practical skills for the growing drone tech industry.
//           </motion.p>
//         </div>
        
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {courses.map((course, index) => (
//             <motion.div key={index} variants={item} className="h-full">
//               <CourseCard course={course} index={index} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function CourseCard({ course, index }) {
//   const [hover, setHover] = useState(false);

//   return (
//     <motion.div
//       className={`bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200/50 h-full flex flex-col ${course.hoverColor}`}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       whileHover={{ 
//         y: -5,
//         transition: { duration: 0.2 }
//       }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <div className="mb-6">
//         <h4 className="font-bold text-gray-900 text-lg mb-1">
//           {course.title}
//         </h4>
//         <motion.div 
//           className="h-1 w-16 bg-yellow-400 rounded-full mb-4"
//           animate={{ 
//             width: hover ? "100%" : "4rem",
//             backgroundColor: hover ? "#3b82f6" : "#facc15"
//           }}
//           transition={{ duration: 0.3 }}
//         ></motion.div>
//       </div>

//       <ul className="text-gray-700 text-sm space-y-3 flex-grow">
//         <li className="transition-colors hover:text-gray-900">
//           <strong className="text-gray-800">Eligibility:</strong> {course.eligibility}
//         </li>
//         <li className="transition-colors hover:text-gray-900">
//           <strong className="text-gray-800">Outcome:</strong> {course.outcome}
//         </li>
//         <li className="transition-colors hover:text-gray-900">
//           <strong className="text-gray-800">Duration:</strong> {course.duration}
//         </li>
//         {course.project && (
//           <li className="transition-colors hover:text-gray-900">
//             <strong className="text-gray-800">Project:</strong> {course.project}
//           </li>
//         )}
//       </ul>
//     </motion.div>
//   );
// }

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Drone Particle Component
function DroneParticle({ id }) {
  const [position, setPosition] = useState({
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: (prev.x + (Math.random() - 0.5) * 120) % (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: (prev.y + (Math.random() - 0.5) * 120) % (typeof window !== 'undefined' ? window.innerHeight : 800)
      }));
    }, 800 + Math.random() * 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none"
      animate={{
        x: position.x,
        y: position.y,
        rotate: [0, 360],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        x: { duration: 1.5, ease: "easeInOut" },
        y: { duration: 1.5, ease: "easeInOut" },
        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{
        left: 0,
        top: 0
      }}
    >
      {/* Drone SVG with animated propellers */}
      <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-30">
        <g fill="currentColor" className="text-blue-600">
          {/* Drone body */}
          <rect x="9" y="10" width="6" height="4" rx="1" />
          {/* Animated Propellers */}
          <motion.circle 
            cx="6" cy="6" r="3" fillOpacity="0.4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="18" cy="6" r="3" fillOpacity="0.4"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="6" cy="18" r="3" fillOpacity="0.4"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="18" cy="18" r="3" fillOpacity="0.4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
          />
          {/* Arms */}
          <line x1="9" y1="12" x2="6" y2="6" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="15" y1="12" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="9" y1="12" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="15" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5"/>
        </g>
      </svg>
    </motion.div>
  );
}

export default function Courses() {
  const courses = [
    {
      title: "Certified Associate in Drone Technologies (CADT)",
      eligibility: "10+2 and above. For engineering science students.",
      outcome:
        "Proficiency in drone fundamentals, regulations, drone-based technologies, and their applications in real-world use cases.",
      duration: "35 hours (Theory: 15 hrs, Practical: 20 hrs)",
      project: "Project Optional",
      hoverColor: "hover:bg-blue-50"
    },
    {
      title: "Certified Professional in Drone Technologies (CPDT)",
      eligibility: "CADT or 70%+ in CPDT entrance exam.",
      outcome:
        "In-depth knowledge of drone systems, payloads, design & development for various drone use cases.",
      duration: "100 hours (Theory: 50 hrs, Practical: 50 hrs)",
      project: "100 Hours Project",
      hoverColor: "hover:bg-green-50"
    },
    {
      title: "Certified Trainer in Drone Technologies (CTDT)",
      eligibility: "CADT with 1 year experience or CPDT holders.",
      outcome:
        "Ability to train and educate others in drone technologies and structure content.",
      duration: "30 hours (Theory: 10 hrs, Practical: 20 hrs)",
      hoverColor: "hover:bg-purple-50"
    },
    {
      title: "Certified Expert in Drone Technologies (CEDT)",
      eligibility: "CPDT or CTDT with 2+ years of experience.",
      outcome:
        "Expertise in drone design and application for industries like manufacturing and automation.",
      duration: "150 hours (Theory: 50 hrs, Practical: 100 hrs)",
      project: "200 Hours Project",
      hoverColor: "hover:bg-yellow-50"
    },
    {
      title: "Certified Master Trainer in Drone Technologies (CMTDT)",
      eligibility: "CEDT or CPDT with 5+ years experience.",
      outcome:
        "Advanced proficiency in training design and mentoring for drone-based learning modules.",
      duration: "60 hours (Theory: 20 hrs, Practical: 40 hrs)",
      hoverColor: "hover:bg-red-50"
    },
    {
      title: "Certified Drone Scientist (CDS)",
      eligibility: "CEDT or CMTDT with 3+ years in drone R&D.",
      outcome:
        "Highest level of expertise in drone research and development with innovation and industry leadership.",
      duration: "Research Oriented (customized based on scope)",
      hoverColor: "hover:bg-indigo-50"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="courses" className="py-14 px-8 relative bg-[linear-gradient(135deg,_#f5f7fa_0%,_#c3cfe2_100%)] overflow-hidden">
      {/* Drone Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <DroneParticle key={i} id={i} />
        ))}
      </div>

      {/* Floating Drone Trails */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, window.innerWidth || 1200],
              y: [Math.random() * (window.innerHeight || 800), Math.random() * (window.innerHeight || 800)],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
            style={{
              left: -10,
              top: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            }}
          />
        ))}
      </div>

      {/* Decorative Background Bubbles with enhanced animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-green-400/10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-20 left-3/4 w-16 h-16 rounded-full bg-purple-400/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, 25, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative inline-block">
              Drone Certification 
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
            </span> Programs
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our drone courses equip you with practical skills for the growing drone tech industry.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <CourseCard course={course} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CourseCard({ course, index }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className={`bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200/50 h-full flex flex-col ${course.hoverColor}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-6">
        <h4 className="font-bold text-gray-900 text-lg mb-1">
          {course.title}
        </h4>
        <motion.div 
          className="h-1 w-16 bg-yellow-400 rounded-full mb-4"
          animate={{ 
            width: hover ? "100%" : "4rem",
            backgroundColor: hover ? "#3b82f6" : "#facc15"
          }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>

      <ul className="text-gray-700 text-sm space-y-3 flex-grow">
        <li className="transition-colors hover:text-gray-900">
          <strong className="text-gray-800">Eligibility:</strong> {course.eligibility}
        </li>
        <li className="transition-colors hover:text-gray-900">
          <strong className="text-gray-800">Outcome:</strong> {course.outcome}
        </li>
        <li className="transition-colors hover:text-gray-900">
          <strong className="text-gray-800">Duration:</strong> {course.duration}
        </li>
        {course.project && (
          <li className="transition-colors hover:text-gray-900">
            <strong className="text-gray-800">Project:</strong> {course.project}
          </li>
        )}
      </ul>
    </motion.div>
  );
}