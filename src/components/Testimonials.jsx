// // // import { useState, useEffect, useRef } from "react";
// // // import Live_Flying_Session from '../assets/Live_Flying_Session.jpeg';
// // // import Industry_Collaboration from '../assets/Industry_Collaboration.jpeg';
// // // import Team_Based_Troubleshooting from '../assets/Team-Based-Troubleshooting.jpeg';
// // // import Course_Completion from '../assets/Course-Completion.jpeg';
// // // import Classroom_Interaction from '../assets/Classroom-Interaction.jpeg';
// // // import Hands_on_Flying from '../assets/Hands-on-Flying.jpeg';
// // // import Drone_Testing from '../assets/Drone-Testing.jpeg';
// // // import Pre_Flight_Checks from '../assets/Pre-Flight-Checks.jpeg';

// // // export default function Portfolio() {
// // //   const portfolioItems = [
// // //     {
// // //       title: "Live Flying Session",
// // //       description:
// // //         "Participated in field training with live drone flying sessions for agricultural spraying and surveying.",
// // //       tags: ["Flight Training", "Aerial Spraying"],
// // //       image: Live_Flying_Session,
// // //     },
// // //     {
// // //       title: "Industry Collaboration",
// // //       description:
// // //         "Collaborated with professionals on agricultural drone deployment and testing in field conditions.",
// // //       tags: ["Drone R&D", "Team Project"],
// // //       image: Industry_Collaboration,
// // //     },
// // //     {
// // //       title: "Team-Based Troubleshooting",
// // //       description:
// // //         "Worked closely with peers and instructors to identify and fix technical issues during drone operation and calibration.",
// // //       tags: ["Teamwork", "Troubleshooting"],
// // //       image: Team_Based_Troubleshooting,
// // //     },
// // //     {
// // //       title: "Course Completion",
// // //       description:
// // //         "Successfully completed certified drone training covering UAV regulations, flight operations, and industrial applications.",
// // //       tags: ["Certified Training", "Drone Regulations"],
// // //       image: Course_Completion,
// // //     },
// // //     {
// // //       title: "Classroom Interaction",
// // //       description:
// // //         "Engaged in detailed drone system demonstrations including payload integration, wiring, and assembly.",
// // //       tags: ["Drone Assembly", "Hands-on Training"],
// // //       image: Classroom_Interaction,
// // //     },
// // //     {
// // //       title: "Hands-on Flying",
// // //       description:
// // //         "Gained practical experience piloting drones in manual and GPS-assisted modes during field sessions under expert guidance.",
// // //       tags: ["Manual Flying", "Drone Pilot Training"],
// // //       image: Hands_on_Flying,
// // //     },
// // //     {
// // //       title: "Drone Testing",
// // //       description:
// // //         "Performed functional and stability tests on various drone models to validate flight accuracy, payload capacity, and system reliability.",
// // //       tags: ["Flight Testing", "System Validation"],
// // //       image: Drone_Testing,
// // //     },
// // //     {
// // //       title: "Pre-Flight Checks",
// // //       description:
// // //         "Followed standard drone checklists for battery levels, propeller inspection, GPS lock, and safety protocols.",
// // //       tags: ["Pre-flight", "Safety"],
// // //       image: Pre_Flight_Checks,
// // //     },
// // //   ];

// // //   const scrollContainerRef = useRef(null);
// // //   const [isPaused, setIsPaused] = useState(false);
// // //   const scrollSpeed = 50; // pixels per second

// // //   useEffect(() => {
// // //     const scrollContainer = scrollContainerRef.current;
// // //     if (!scrollContainer) return;

// // //     let animationId;
// // //     let lastTimestamp;
// // //     let scrollPosition = 0;

// // //     const scroll = (timestamp) => {
// // //       if (!lastTimestamp) lastTimestamp = timestamp;
// // //       const deltaTime = timestamp - lastTimestamp;
// // //       lastTimestamp = timestamp;

// // //       if (!isPaused) {
// // //         scrollPosition += (scrollSpeed * deltaTime) / 1000;
        
// // //         // Check if we've scrolled to the end
// // //         if (scrollPosition >= scrollContainer.scrollWidth / 2) {
// // //           // Reset to start without animation for seamless loop
// // //           scrollPosition = 0;
// // //           scrollContainer.scrollLeft = 0;
// // //         } else {
// // //           scrollContainer.scrollLeft = scrollPosition;
// // //         }
// // //       }

// // //       animationId = requestAnimationFrame(scroll);
// // //     };

// // //     animationId = requestAnimationFrame(scroll);

// // //     return () => {
// // //       cancelAnimationFrame(animationId);
// // //     };
// // //   }, [isPaused]);

// // //   return (
// // //     <section className="py-20 px-6 bg-gray-50 relative" id="portfolio">
// // //       {/* Background Decorations */}
// // //       <div className="absolute inset-0 overflow-hidden">
// // //         <div className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
// // //         <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
// // //       </div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
// // //             <span className="relative inline-block">
// // //               Our Portfolio
// // //               <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
// // //             </span>
// // //           </h2>
// // //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// // //             Explore our drone training journey through these highlights from our hands-on sessions and collaborative projects.
// // //           </p>
// // //         </div>

// // //         {/* Horizontal Scroll Container */}
// // //         <div 
// // //           ref={scrollContainerRef}
// // //           className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
// // //           onMouseEnter={() => setIsPaused(true)}
// // //           onMouseLeave={() => setIsPaused(false)}
// // //         >
// // //           {portfolioItems.map((item, index) => (
// // //             <PortfolioCard key={index} item={item} />
// // //           ))}
// // //         </div>

// // //         {/* Scroll indicators (optional) */}
// // //         <div className="flex justify-center mt-6 space-x-2">
// // //           <button 
// // //             className="w-3 h-3 rounded-full bg-gray-300 focus:outline-none"
// // //             onClick={() => setIsPaused(!isPaused)}
// // //             aria-label={isPaused ? "Play auto-scroll" : "Pause auto-scroll"}
// // //           >
// // //             {isPaused ? (
// // //               <span className="sr-only">Play</span>
// // //             ) : (
// // //               <span className="sr-only">Pause</span>
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function PortfolioCard({ item }) {
// // //   const [hover, setHover] = useState(false);

// // //   return (
// // //     <div
// // //       className={`min-w-[300px] max-w-xs bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
// // //         hover ? "-translate-y-2 shadow-xl" : ""
// // //       }`}
// // //       onMouseEnter={() => setHover(true)}
// // //       onMouseLeave={() => setHover(false)}
// // //     >
// // //       <div
// // //         className="h-48 bg-cover bg-center"
// // //         style={{ backgroundImage: `url(${item.image})` }}
// // //       ></div>
// // //       <div className="p-6">
// // //         <h3 className="text-xl font-semibold text-blue-900 mb-2">
// // //           {item.title}
// // //         </h3>
// // //         <p className="text-gray-600 text-sm mb-4">{item.description}</p>
// // //         <div className="flex flex-wrap gap-2">
// // //           {item.tags.map((tag, i) => (
// // //             <span
// // //               key={i}
// // //               className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full"
// // //             >
// // //               {tag}
// // //             </span>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useState, useEffect, useRef } from "react";
// // import Live_Flying_Session from '../assets/Live_Flying_Session.jpeg';
// // import Industry_Collaboration from '../assets/Industry_Collaboration.jpeg';
// // import Team_Based_Troubleshooting from '../assets/Team-Based-Troubleshooting.jpeg';
// // import Course_Completion from '../assets/Course-Completion.jpeg';
// // import Classroom_Interaction from '../assets/Classroom-Interaction.jpeg';
// // import Hands_on_Flying from '../assets/Hands-on-Flying.jpeg';
// // import Drone_Testing from '../assets/Drone-Testing.jpeg';
// // import Pre_Flight_Checks from '../assets/Pre-Flight-Checks.jpeg';

// // export default function Portfolio() {
// //   const portfolioItems = [
// //     {
// //       title: "Live Flying Session",
// //       description:
// //         "Participated in field training with live drone flying sessions for agricultural spraying and surveying.",
// //       tags: ["Flight Training", "Aerial Spraying"],
// //       image: Live_Flying_Session,
// //     },
// //     {
// //       title: "Industry Collaboration",
// //       description:
// //         "Collaborated with professionals on agricultural drone deployment and testing in field conditions.",
// //       tags: ["Drone R&D", "Team Project"],
// //       image: Industry_Collaboration,
// //     },
// //     {
// //       title: "Team-Based Troubleshooting",
// //       description:
// //         "Worked closely with peers and instructors to identify and fix technical issues during drone operation and calibration.",
// //       tags: ["Teamwork", "Troubleshooting"],
// //       image: Team_Based_Troubleshooting,
// //     },
// //     {
// //       title: "Course Completion",
// //       description:
// //         "Successfully completed certified drone training covering UAV regulations, flight operations, and industrial applications.",
// //       tags: ["Certified Training", "Drone Regulations"],
// //       image: Course_Completion,
// //     },
// //     {
// //       title: "Classroom Interaction",
// //       description:
// //         "Engaged in detailed drone system demonstrations including payload integration, wiring, and assembly.",
// //       tags: ["Drone Assembly", "Hands-on Training"],
// //       image: Classroom_Interaction,
// //     },
// //     {
// //       title: "Hands-on Flying",
// //       description:
// //         "Gained practical experience piloting drones in manual and GPS-assisted modes during field sessions under expert guidance.",
// //       tags: ["Manual Flying", "Drone Pilot Training"],
// //       image: Hands_on_Flying,
// //     },
// //     {
// //       title: "Drone Testing",
// //       description:
// //         "Performed functional and stability tests on various drone models to validate flight accuracy, payload capacity, and system reliability.",
// //       tags: ["Flight Testing", "System Validation"],
// //       image: Drone_Testing,
// //     },
// //     {
// //       title: "Pre-Flight Checks",
// //       description:
// //         "Followed standard drone checklists for battery levels, propeller inspection, GPS lock, and safety protocols.",
// //       tags: ["Pre-flight", "Safety"],
// //       image: Pre_Flight_Checks,
// //     },
// //   ];

// //   const scrollContainerRef = useRef(null);
// //   const [isPaused, setIsPaused] = useState(false);

// //   return (
// //     <section className="py-20 px-6 bg-gray-50 relative" id="portfolio">
// //       {/* Background Decorations */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         <div className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
// //         <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
// //       </div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
// //             <span className="relative inline-block">
// //               Our Portfolio
// //               <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
// //             </span>
// //           </h2>
// //           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //             Explore our drone training journey through these highlights from our hands-on sessions and collaborative projects.
// //           </p>
// //         </div>

// //         {/* Scrollable Portfolio Carousel */}
// //         <div
// //           ref={scrollContainerRef}
// //           className="relative flex overflow-x-auto space-x-4 pb-6 scrollbar-hide snap-x snap-mandatory"
// //           onMouseEnter={() => setIsPaused(true)}
// //           onMouseLeave={() => setIsPaused(false)}
// //         >
// //           {portfolioItems.map((item, index) => (
// //             <PortfolioCard key={index} item={item} containerRef={scrollContainerRef} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function PortfolioCard({ item, containerRef }) {
// //   const cardRef = useRef();
// //   const [scale, setScale] = useState(1);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (!cardRef.current || !containerRef.current) return;

// //       const card = cardRef.current.getBoundingClientRect();
// //       const container = containerRef.current.getBoundingClientRect();
// //       const containerCenter = container.left + container.width / 2;
// //       const cardCenter = card.left + card.width / 2;

// //       const distance = Math.abs(containerCenter - cardCenter);
// //       const maxDistance = container.width / 2;
// //       const scaleFactor = 1 - Math.min(distance / maxDistance, 1) * 0.3;

// //       setScale(scaleFactor);
// //     };

// //     const node = containerRef.current;
// //     if (node) node.addEventListener("scroll", handleScroll);

// //     handleScroll(); // Initial call

// //     return () => {
// //       if (node) node.removeEventListener("scroll", handleScroll);
// //     };
// //   }, [containerRef]);

// //   return (
// //     <div
// //       ref={cardRef}
// //       className="snap-center transition-transform duration-300 ease-out px-2"
// //       style={{
// //         transform: `scale(${scale})`,
// //         minWidth: "300px",
// //         maxWidth: "300px",
// //       }}
// //     >
// //       <div className="bg-white rounded-xl shadow-md overflow-hidden">
// //         <div
// //           className="h-48 bg-cover bg-center"
// //           style={{ backgroundImage: `url(${item.image})` }}
// //         ></div>
// //         <div className="p-6">
// //           <h3 className="text-xl font-semibold text-blue-900 mb-2">
// //             {item.title}
// //           </h3>
// //           <p className="text-gray-600 text-sm mb-4">{item.description}</p>
// //           <div className="flex flex-wrap gap-2">
// //             {item.tags.map((tag, i) => (
// //               <span
// //                 key={i}
// //                 className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full"
// //               >
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { useState, useEffect, useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import Live_Flying_Session from '../assets/Live_Flying_Session.jpeg';
// import Industry_Collaboration from '../assets/Industry_Collaboration.jpeg';
// import Team_Based_Troubleshooting from '../assets/Team-Based-Troubleshooting.jpeg';
// import Course_Completion from '../assets/Course-Completion.jpeg';
// import Classroom_Interaction from '../assets/Classroom-Interaction.jpeg';
// import Hands_on_Flying from '../assets/Hands-on-Flying.jpeg';
// import Drone_Testing from '../assets/Drone-Testing.jpeg';
// import Pre_Flight_Checks from '../assets/Pre-Flight-Checks.jpeg';

// export default function Portfolio() {
//   const scrollContainerRef = useRef(null);
//   const autoScrollIntervalRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   const portfolioItems = [
//     {
//       title: "Live Flying Session",
//       description: "Participated in field training with live drone flying sessions for agricultural spraying and surveying.",
//       tags: ["Flight Training", "Aerial Spraying"],
//       image: Live_Flying_Session,
//     },
//     {
//       title: "Industry Collaboration",
//       description: "Collaborated with professionals on agricultural drone deployment and testing in field conditions.",
//       tags: ["Drone R&D", "Team Project"],
//       image: Industry_Collaboration,
//     },
//     {
//       title: "Hands-on Flying",
//       description: "Gained practical experience piloting drones in manual and GPS-assisted modes during field sessions under expert guidance.",
//       tags: ["Manual Flying", "Drone Pilot Training"],
//       image: Hands_on_Flying,
//     },
//       {
//       title: "Team-Based Troubleshooting",
//       description: "Worked closely with peers and instructors to identify and fix technical issues during drone operation and calibration.",
//       tags: ["Teamwork", "Troubleshooting"],
//       image: Team_Based_Troubleshooting,
//     },
//     {
//       title: "Pre-Flight Checks",
//       description: "Followed standard drone checklists for battery levels, propeller inspection, GPS lock, and safety protocols.",
//       tags: ["Pre-flight", "Safety"],
//       image: Pre_Flight_Checks,
//     },
//      {
//       title: "Course Completion",
//       description: "Successfully completed certified drone training covering UAV regulations, flight operations, and industrial applications.",
//       tags: ["Certified Training", "Drone Regulations"],
//       image: Course_Completion,
//     },
//      {
//       title: "Drone Testing",
//       description: "Performed functional and stability tests on various drone models to validate flight accuracy, payload capacity, and system reliability.",
//       tags: ["Flight Testing", "System Validation"],
//       image: Drone_Testing,
//     },
//      {
//       title: "Classroom Interaction",
//       description: "Engaged in detailed drone system demonstrations including payload integration, wiring, and assembly.",
//       tags: ["Drone Assembly", "Hands-on Training"],
//       image: Classroom_Interaction,
//     },
//   ];

//   // Auto-scroll every 3 seconds
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const scrollNext = () => {
//       if (!isPaused) {
//         container.scrollBy({ left: 320, behavior: "smooth" }); // scroll one card
//         // loop to beginning
//         if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
//           container.scrollTo({ left: 0, behavior: "smooth" });
//         }
//       }
//     };

//     autoScrollIntervalRef.current = setInterval(scrollNext, 6000);

//     return () => clearInterval(autoScrollIntervalRef.current);
//   }, [isPaused]);

//   const scrollByAmount = (amount) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.scrollBy({ left: amount, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="py-20 px-6 bg-gray-50 relative" id="portfolio">
//       {/* Decorations */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
//         <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
//             <span className="relative inline-block">
//               Our Portfolio
//               <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Explore our drone training journey through these highlights from our hands-on sessions and collaborative projects.
//           </p>
//         </div>

//         {/* Scrollable Carousel Container with Arrows */}
//         <div
//           className="relative group"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {/* Arrows */}
//           <button
//             onClick={() => scrollByAmount(-320)}
//             className="hidden md:flex items-center justify-center absolute z-20 top-1/2 left-0 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition group-hover:flex"
//           >
//             <FaChevronLeft size={20} />
//           </button>

//           <button
//             onClick={() => scrollByAmount(320)}
//             className="hidden md:flex items-center justify-center absolute z-20 top-1/2 right-0 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition group-hover:flex"
//           >
//             <FaChevronRight size={20} />
//           </button>

//           {/* Scrollable Container */}
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto space-x-4 pb-6 scrollbar-hide snap-x snap-mandatory"
//           >
//             {portfolioItems.map((item, index) => (
//               <PortfolioCard key={index} item={item} containerRef={scrollContainerRef} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function PortfolioCard({ item, containerRef }) {
//   const cardRef = useRef();
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!cardRef.current || !containerRef.current) return;

//       const card = cardRef.current.getBoundingClientRect();
//       const container = containerRef.current.getBoundingClientRect();
//       const containerCenter = container.left + container.width / 2;
//       const cardCenter = card.left + card.width / 2;

//       const distance = Math.abs(containerCenter - cardCenter);
//       const maxDistance = container.width / 2;
//       const scaleFactor = 1 - Math.min(distance / maxDistance, 1) * 0.3;

//       setScale(scaleFactor);
//     };

//     const node = containerRef.current;
//     if (node) node.addEventListener("scroll", handleScroll);

//     handleScroll(); // initial scale on mount

//     return () => {
//       if (node) node.removeEventListener("scroll", handleScroll);
//     };
//   }, [containerRef]);

//   return (
//     <div
//       ref={cardRef}
//       className="snap-center transition-transform duration-300 ease-out px-2"
//       style={{
//         transform: `scale(${scale})`,
//         minWidth: "300px",
//         maxWidth: "300px",
//       }}
//     >
//       <div className="bg-white rounded-xl shadow-md overflow-hidden">
//         <div
//           className="h-48 bg-cover bg-center"
//           style={{ backgroundImage: `url(${item.image})` }}
//         ></div>
//         <div className="p-6">
//           <h3 className="text-xl font-semibold text-blue-900 mb-2">
//             {item.title}
//           </h3>
//           <p className="text-gray-600 text-sm mb-4">{item.description}</p>
//           <div className="flex flex-wrap gap-2">
//             {item.tags.map((tag, i) => (
//               <span
//                 key={i}
//                 className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Live_Flying_Session from '../assets/Live_Flying_Session.jpeg';
import Industry_Collaboration from '../assets/Industry_Collaboration.jpeg';
import Team_Based_Troubleshooting from '../assets/Team-Based-Troubleshooting.jpeg';
import Course_Completion from '../assets/Course-Completion.jpeg';
import Classroom_Interaction from '../assets/Classroom-Interaction.jpeg';
import Hands_on_Flying from '../assets/Hands-on-Flying.jpeg';
import Drone_Testing from '../assets/Drone-Testing.jpeg';
import Pre_Flight_Checks from '../assets/Pre-Flight-Checks.jpeg';

export default function Portfolio() {
  const scrollContainerRef = useRef(null);

  const portfolioItems = [
    {
      title: "Live Flying Session",
      description: "Participated in field training with live drone flying sessions for agricultural spraying and surveying.",
      tags: ["Flight Training", "Aerial Spraying"],
      image: Live_Flying_Session,
    },
    {
      title: "Industry Collaboration",
      description: "Collaborated with professionals on agricultural drone deployment and testing in field conditions.",
      tags: ["Drone R&D", "Team Project"],
      image: Industry_Collaboration,
    },
    {
      title: "Hands-on Flying",
      description: "Gained practical experience piloting drones in manual and GPS-assisted modes during field sessions under expert guidance.",
      tags: ["Manual Flying", "Drone Pilot Training"],
      image: Hands_on_Flying,
    },
    {
      title: "Team-Based Troubleshooting",
      description: "Worked closely with peers and instructors to identify and fix technical issues during drone operation and calibration.",
      tags: ["Teamwork", "Troubleshooting"],
      image: Team_Based_Troubleshooting,
    },
    {
      title: "Pre-Flight Checks",
      description: "Followed standard drone checklists for battery levels, propeller inspection, GPS lock, and safety protocols.",
      tags: ["Pre-flight", "Safety"],
      image: Pre_Flight_Checks,
    },
    {
      title: "Course Completion",
      description: "Successfully completed certified drone training covering UAV regulations, flight operations, and industrial applications.",
      tags: ["Certified Training", "Drone Regulations"],
      image: Course_Completion,
    },
    {
      title: "Drone Testing",
      description: "Performed functional and stability tests on various drone models to validate flight accuracy, payload capacity, and system reliability.",
      tags: ["Flight Testing", "System Validation"],
      image: Drone_Testing,
    },
    {
      title: "Classroom Interaction",
      description: "Engaged in detailed drone system demonstrations including payload integration, wiring, and assembly.",
      tags: ["Drone Assembly", "Hands-on Training"],
      image: Classroom_Interaction,
    },
  ];

  const scrollByAmount = (amount) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-50 relative" id="portfolio">
      {/* Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-5 w-24 h-24 rounded-full bg-yellow-400/10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-36 h-36 rounded-full bg-blue-900/10 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
            <span className="relative inline-block">
              Our Portfolio
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-600/30 -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our drone training journey through these highlights from our hands-on sessions and collaborative projects.
          </p>
        </div>

        {/* Scrollable Carousel Container with Always-visible Arrows */}
        <div className="relative flex items-center">
          {/* Left Arrow (always visible) */}
          <button
            onClick={() => scrollByAmount(-320)}
            className="flex items-center justify-center absolute z-20 left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-6 px-10 scrollbar-hide snap-x snap-mandatory w-full"
          >
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} item={item} containerRef={scrollContainerRef} />
            ))}
          </div>

          {/* Right Arrow (always visible) */}
          <button
            onClick={() => scrollByAmount(320)}
            className="flex items-center justify-center absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, containerRef }) {
  const cardRef = useRef();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current || !containerRef.current) return;

      const card = cardRef.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();
      const containerCenter = container.left + container.width / 2;
      const cardCenter = card.left + card.width / 2;

      const distance = Math.abs(containerCenter - cardCenter);
      const maxDistance = container.width / 2;
      const scaleFactor = 1 - Math.min(distance / maxDistance, 1) * 0.3;

      setScale(scaleFactor);
    };

    const node = containerRef.current;
    if (node) node.addEventListener("scroll", handleScroll);

    handleScroll(); // initial scaling

    return () => {
      if (node) node.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  return (
    <div
      ref={cardRef}
      className="snap-center transition-transform duration-300 ease-out px-2"
      style={{
        transform: `scale(${scale})`,
        minWidth: "300px",
        maxWidth: "300px",
      }}
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
