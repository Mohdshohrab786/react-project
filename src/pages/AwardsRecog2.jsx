import React, { useEffect, useState, useRef } from "react";
import "./AwardsRecog.css";
import Heading from "../Materials/Heading2/Heading";

const awards = [
  {
    year: "2020",
    title: "Best Startup Award",
    description: "Recognized as the best emerging startup in the industry.",
  },
  {
    year: "2021",
    title: "Innovation Excellence",
    description: "Awarded for outstanding innovation and R&D achievements.",
  },
  {
    year: "2022",
    title: "Leadership Award",
    description: "Honored for remarkable leadership in the market.",
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Achieved international recognition for excellence.",
  },
  {
    year: "2024",
    title: "Sustainability Award",
    description: "Recognized for eco-friendly and sustainable practices.",
  },
];

export default function AwardsTimeline() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const intervalRef = useRef(null);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);

  // start autoplay
  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % awards.length);
    }, 3000);
  };

  // stop autoplay
  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  // Scroll only if element not fully visible
  useEffect(() => {
    const container = containerRef.current;
    const el = itemRefs.current[visibleIndex];
    if (container && el) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      const fullyVisible =
        elRect.top >= containerRect.top &&
        elRect.bottom <= containerRect.bottom;

      if (!fullyVisible) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [visibleIndex]);

  const handleDotClick = (index) => {
    setVisibleIndex(index);
    startAutoPlay(); // restart autoplay
  };

  return (
    <div className="timeline-container" ref={containerRef}>
      <Heading title="Awards & Recognition" color="green" />
      {/* <h2 className="timeline-heading">🏆 Awards & Recognition</h2> */}
      <div className="timeline mt-4 pt-2">
        {awards.map((award, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`timeline-item ${
              index === visibleIndex ? "active" : ""
            }`}
          >
            <div
              className={`timeline-dot ${
                index === visibleIndex ? "selected" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
            <div className="timeline-content">
              <span className="timeline-year">{award.year}</span>
              <h3 className="timeline-title">{award.title}</h3>
              <p className="timeline-description">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import React, { useEffect, useState, useRef } from "react";
// import "./AwardsRecog.css";

// const awards = [
//   {
//     year: "2020",
//     title: "Best Startup Award",
//     description: "Recognized as the best emerging startup in the industry.",
//   },
//   {
//     year: "2021",
//     title: "Innovation Excellence",
//     description: "Awarded for outstanding innovation and R&D achievements.",
//   },
//   {
//     year: "2022",
//     title: "Leadership Award",
//     description: "Honored for remarkable leadership in the market.",
//   },
//   {
//     year: "2023",
//     title: "Global Recognition",
//     description: "Achieved international recognition for excellence.",
//   },
//   {
//     year: "2024",
//     title: "Sustainability Award",
//     description: "Recognized for eco-friendly and sustainable practices.",
//   },
// ];

// export default function AwardsTimeline() {
//   const [visibleIndex, setVisibleIndex] = useState(0);
//   const intervalRef = useRef(null);

//   // Function to start autoplay
//   const startAutoPlay = () => {
//     stopAutoPlay(); // clear any old timer
//     intervalRef.current = setInterval(() => {
//       setVisibleIndex((prev) => (prev + 1) % awards.length);
//     }, 3000);
//   };

//   // Function to stop autoplay
//   const stopAutoPlay = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   };

//   // Start autoplay on mount
//   useEffect(() => {
//     startAutoPlay();
//     return () => stopAutoPlay();
//   }, []);

//   // Handle dot click
//   const handleDotClick = (index) => {
//     setVisibleIndex(index);
//     startAutoPlay(); // restart timer on click
//   };

//   return (
//     <div className="timeline-container">
//       <h2 className="timeline-heading">🏆 Awards & Recognition</h2>
//       <div className="timeline">
//         {awards.map((award, index) => (
//           <div
//             key={index}
//             className={`timeline-item ${
//               index === visibleIndex ? "active" : ""
//             }`}
//           >
//             {/* Clickable dot */}
//             <div
//               className={`timeline-dot ${
//                 index === visibleIndex ? "selected" : ""
//               }`}
//               onClick={() => handleDotClick(index)}
//             ></div>

//             {/* Award details */}
//             <div className="timeline-content">
//               <span className="timeline-year">{award.year}</span>
//               <h3 className="timeline-title">{award.title}</h3>
//               <p className="timeline-description">{award.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // import React, { useEffect, useState } from "react";
// // import "./AwardsRecog.css";

// // const awards = [
// //   {
// //     year: "2020",
// //     title: "Best Startup Award",
// //     description: "Recognized as the best emerging startup in the industry.",
// //   },
// //   {
// //     year: "2021",
// //     title: "Innovation Excellence",
// //     description: "Awarded for outstanding innovation and R&D achievements.",
// //   },
// //   {
// //     year: "2022",
// //     title: "Leadership Award",
// //     description: "Honored for remarkable leadership in the market.",
// //   },
// //   {
// //     year: "2023",
// //     title: "Global Recognition",
// //     description: "Achieved international recognition for excellence.",
// //   },
// //   {
// //     year: "2024",
// //     title: "Sustainability Award",
// //     description: "Recognized for eco-friendly and sustainable practices.",
// //   },
// // ];

// // export default function AwardsTimeline() {
// //   const [visibleIndex, setVisibleIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setVisibleIndex((prev) => (prev + 1) % awards.length);
// //     }, 3000); // change award every 3 sec
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="timeline-container">
// //       <h2 className="timeline-heading">🏆 Awards & Recognition</h2>
// //       <div className="timeline">
// //         {awards.map((award, index) => (
// //           <div
// //             key={index}
// //             className={`timeline-item ${
// //               index === visibleIndex ? "active" : ""
// //             }`}
// //           >
// //             <div className="timeline-dot"></div>
// //             <div className="timeline-content">
// //               <span className="timeline-year">{award.year}</span>
// //               <h3 className="timeline-title">{award.title}</h3>
// //               <p className="timeline-description">{award.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
