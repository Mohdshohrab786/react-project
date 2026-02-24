import React, { useState } from "react";
import "./About.css";
import HeroImg from "../Materials/Hero/HeroImg";
import Img from "../imgs/heroImgs/About.jpeg";
import ImageGrid from "../Components2/img-grid/img-grid";

const AboutPage = () => {
  const tabs = [
    {
      title: "OverView",
      content:
        "AKS Partners (formerly known as A.K. Singh & Co) is a law firm based in New Delhi (India) that provides a comprehensive range of legal services and solutions to domestic and international clients. With over 30 years of experience across diverse industry segments and practice areas, AKS Partners combines the breadth of its knowledge with departmental depth to provide clients with a multidisciplinary approach that addresses all aspects of their needs.",
      imgs: <ImageGrid />,
    },
    {
      title: "The Approach",
      content:
        "AKS Partners believes in working closely with its clients, providing them with strategic counsel through every twist and turn of a transaction. Professionalism, effectiveness and speed are core to the firm's work ethic and the legal advice rendered by the team is consistently high quality and commercially relevant.",
      imgs: <ImageGrid />,
    },
    {
      title: "Core Values",
      content:
        "Our team consists of experienced lawyers and legal professionals who bring deep industry knowledge and a collaborative approach to solving complex legal challenges.",
      imgs: <ImageGrid />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <HeroImg image={Img}>About Us</HeroImg>
      <div className="container">
        <div className="side-tabs-container">
          <div className="tabs-list">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <h2>{tabs[activeTab].title}</h2>
            <p>{tabs[activeTab].content}</p>
            {tabs[activeTab].imgs}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;


// import React, { useState } from "react";
// import "./About.css";
// import HeroImg from "../Materials/Hero/HeroImg";
// import Img from "../imgs/heroImgs/About.jpeg";
// import ImageGrid from "../Components2/img-grid/img-grid";


// const AboutPage = () => {
//   const tabs = [
//     {
//       title: "OverView",
//       content:
//         "AKS Partners (formerly known as A.K. Singh & Co) is a law firm based in New Delhi (India) that provides a comprehensive range of legal services and solutions to domestic and international clients. With over 30 years of experience across diverse industry segments and practice areas, AKS Partners combines the breadth of its knowledge with departmental depth to provide clients with a multidisciplinary approach that addresses all aspects of their needs.",
//       imgs: <ImageGrid />,
//     },
//     {
//       title: "The Approach",
//       content:
//         "AKS Partners believes in working closely with its clients, providing them with strategic counsel through every twist and turn of a transaction. Professionalism, effectiveness and speed are core to the firm's work ethic and the legal advice rendered by the team is consistently high quality and commercially relevant. AKS Partners believes in creating teams that are specific to its clients' needs, combining specialist legal skills, industry experience and regional know-how.It is for this reason that it has an enviable track record of successfully managing large and complex multi-jurisdictional transactions, disputes and projects. Partners of the Firm are at all times personally involved with, and closely monitor, every project that is handled by its team.",
//       imgs: <ImageGrid />,
//     },
//     {
//       title: "Core Values",
//       content:
//         "Our team consists of experienced lawyers and legal professionals who bring deep industry knowledge and a collaborative approach to solving complex legal challenges.",
//       imgs: <ImageGrid />,
//     },
//     {
//       title: "Awards & Recognitions",
//       content:
//         "Reach out to us for consultations, legal advice, or inquiries. Email: info@lawfirm.com | Phone: +91 98765 43210",
//       imgs: <ImageGrid />,
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <>
//       <HeroImg image={Img}> About Us</HeroImg>
//       <div className="container">
//         <div className="side-tabs-container">
//           <div className="tabs-list">
//             {tabs.map((tab, index) => (
//               <button
//                 key={index}
//                 className={`tab-btn ${activeTab === index ? "active" : ""}`}
//                 onClick={() => setActiveTab(index)}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>
//           <div className="tab-content">
//             <h2>{tabs[activeTab].title}</h2>
//             <p>{tabs[activeTab].content}</p>
//             <>{tabs[activeTab].imgs}</>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutPage;

// // import React, { useState } from "react";
// // import Lightbox from "yet-another-react-lightbox";
// // import "yet-another-react-lightbox/styles.css";
// // import "./About.css";

// // const AboutPage = () => {
// //   const [activeTab, setActiveTab] = useState("Overview");
// //   const [lightboxOpen, setLightboxOpen] = useState(false);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const tabs = [
// //     "Overview",
// //     "Social Commitment",
// //     "Sustainable Environment",
// //     "Gallery", // 👈 last tab will show image grid
// //   ];

// //   const slides = [
// //     { src: "https://picsum.photos/id/1018/1000/600/" },
// //     { src: "https://picsum.photos/id/1015/1000/600/" },
// //     { src: "https://picsum.photos/id/1019/1000/600/" },
// //     { src: "https://picsum.photos/id/1020/1000/600/" },
// //   ];

// //   return (
// //     <div className="flex min-h-screen">
// //       {/* Sidebar */}
// //       <div className="w-64 border-r border-gray-300 p-4">
// //         <ul className="space-y-4">
// //           {tabs.map((tab) => (
// //             <li
// //               key={tab}
// //               className={`cursor-pointer p-2 ${
// //                 activeTab === tab ? "font-bold text-blue-600" : "text-gray-700"
// //               }`}
// //               onClick={() => setActiveTab(tab)}
// //             >
// //               {tab}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Content */}
// //       <div className="flex-1 p-8 border-t border-gray-300">
// //         {activeTab === "Overview" && (
// //           <div>
// //             <h2 className="text-2xl font-bold mb-4">Overview</h2>
// //             <p>
// //               Welcome to our law firm. This section provides a quick overview of
// //               who we are and what we do.
// //             </p>
// //           </div>
// //         )}

// //         {activeTab === "Social Commitment" && (
// //           <div>
// //             <h2 className="text-2xl font-bold mb-4">Social Commitment</h2>
// //             <p>
// //               Our firm is deeply committed to giving back to society through
// //               impactful initiatives.
// //             </p>
// //           </div>
// //         )}

// //         {activeTab === "Sustainable Environment" && (
// //           <div>
// //             <h2 className="text-2xl font-bold mb-4">Sustainable Environment</h2>
// //             <p>
// //               Sustainability is at the core of our operations, ensuring we
// //               reduce our carbon footprint and protect the environment.
// //             </p>
// //           </div>
// //         )}

// //         {activeTab === "Gallery" && (
// //           <div>
// //             <h2 className="text-2xl font-bold mb-4">Gallery</h2>

// //             {/* Image Grid */}
// //             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// //               {slides.map((slide, index) => (
// //                 <img
// //                   key={index}
// //                   src={slide.src}
// //                   alt={`Gallery ${index}`}
// //                   className="w-full h-40 object-cover rounded-lg cursor-pointer"
// //                   onClick={() => {
// //                     setCurrentIndex(index);
// //                     setLightboxOpen(true);
// //                   }}
// //                 />
// //               ))}
// //             </div>

// //             {/* Lightbox Carousel */}
// //             <Lightbox
// //               open={lightboxOpen}
// //               close={() => setLightboxOpen(false)}
// //               slides={slides}
// //               index={currentIndex}
// //               on={{ view: ({ index }) => setCurrentIndex(index) }}
// //               carousel={{ finite: false, autoplay: true }}
// //             />
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutPage;
