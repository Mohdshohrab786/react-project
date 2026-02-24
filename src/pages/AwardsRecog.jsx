import React, { useState } from "react";
import AwardCard from "./AwardCard";
import award1 from "../imgs/awards/awards/img-1.png";
import award2 from "../imgs/awards/awards/img-2.png";
import award3 from "../imgs/awards/awards/img-3.png";
import award4 from "../imgs/awards/awards/img-4.png";
import award5 from "../imgs/awards/awards/img-5.png";
import award6 from "../imgs/awards/awards/img-6.png";
import award7 from "../imgs/awards/awards/img-7.png";
import award8 from "../imgs/awards/awards/img-8.png";
import award9 from "../imgs/awards/awards/img-9.png";
import award10 from "../imgs/awards/awards/img-10.png";
import award11 from "../imgs/awards/awards/img-11.png";
import award12 from "../imgs/awards/awards/img-12.jpg";
import HeroImg from "../Materials/Hero/HeroImg";
import Img from "../imgs/heroImgs/awardsHero.jpg";

import "./AwardsPage.css";

const awardsData = [
  { title: "Award 1", year: 2023, image: award1, description: "Award 1 detail text..." },
  { title: "Award 2", year: 2022, image: award2, description: "Award 2 detail text..." },
  { title: "Award 3", year: 2023, image: award3, description: "Award 3 detail text..." },
  { title: "Award 4", year: 2021, image: award4, description: "Award 4 detail text..." },
  { title: "Award 5", year: 2020, image: award5, description: "Award 5 detail text..." },
  { title: "Award 6", year: 2023, image: award6, description: "Award 6 detail text..." },
  { title: "Award 7", year: 2022, image: award7, description: "Award 7 detail text..." },
  { title: "Award 8", year: 2021, image: award8, description: "Award 8 detail text..." },
  { title: "Award 9", year: 2020, image: award9, description: "Award 9 detail text..." },
  { title: "Award 10", year: 2023, image: award10, description: "Award 10 detail text..." },
  { title: "Award 11", year: 2022, image: award11, description: "Award 11 detail text..." },
  { title: "Award 12", year: 2021, image: award12, description: "Award 12 detail text..." },
];

const AwardsTimeline = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null); // index of clicked award

  const years = ["All", ...new Set(awardsData.map(a => a.year))];

  const filteredAwards =
    selectedYear === "All"
      ? awardsData
      : awardsData.filter(a => a.year === selectedYear);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const prevAward = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredAwards.length - 1 : prev - 1));
  };

  const nextAward = () => {
    setCurrentIndex((prev) => (prev === filteredAwards.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <HeroImg image={Img}>Awards and Recognition</HeroImg>

      <div className="awards-container">
        <div className="filter">
          <label>Filter by year: </label>{" "}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value) || "All")}
          >
            {years.map((year, idx) => (
              <option key={idx} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="awards-grid">
          {filteredAwards.map((award, idx) => (
            <div key={idx} onClick={() => openModal(idx)}>
              <AwardCard
                title={award.title}
                year={award.year}
                image={award.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Modal */}
      {currentIndex !== null && (
        <div className="award-overlay" onClick={closeModal}>
          <div className="award-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>

            <img
              src={filteredAwards[currentIndex].image}
              alt={filteredAwards[currentIndex].title}
              className="modal-img"
            />
            <h2>{filteredAwards[currentIndex].title}</h2>
            <p>{filteredAwards[currentIndex].description}</p>

            <div className="modal-nav">
              <button onClick={prevAward}>&larr; Prev</button>
              <button onClick={nextAward}>Next &rarr;</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AwardsTimeline;


// import React, { useState } from "react";
// import AwardCard from "./AwardCard";
// import award1 from "../imgs/awards/awards/img-1.png";
// import award2 from "../imgs/awards/awards/img-2.png";
// import award3 from "../imgs/awards/awards/img-3.png";
// import award4 from "../imgs/awards/awards/img-4.png";
// import award5 from "../imgs/awards/awards/img-5.png";
// import award6 from "../imgs/awards/awards/img-6.png";
// import award7 from "../imgs/awards/awards/img-7.png";
// import award8 from "../imgs/awards/awards/img-8.png";
// import award9 from "../imgs/awards/awards/img-9.png";
// import award10 from "../imgs/awards/awards/img-10.png";
// import award11 from "../imgs/awards/awards/img-11.png";
// import award12 from "../imgs/awards/awards/img-12.jpg";
// import HeroImg from "../Materials/Hero/HeroImg";
// import Img from "../imgs/carousel/img-1.jpg";

// import "./AwardsPage.css";

// const awardsData = [
//   { title: "Award 1", year: 2023, image: award1 },
//   { title: "Award 2", year: 2022, image: award2 },
//   { title: "Award 3", year: 2023, image: award3 },
//   { title: "Award 4", year: 2021, image: award4 },
//   { title: "Award 5", year: 2020, image: award5 },
//   { title: "Award 6", year: 2023, image: award6 },
//   { title: "Award 7", year: 2022, image: award7 },
//   { title: "Award 8", year: 2021, image: award8 },
//   { title: "Award 9", year: 2020, image: award9 },
//   { title: "Award 10", year: 2023, image: award10 },
//   { title: "Award 11", year: 2022, image: award11 },
//   { title: "Award 12", year: 2021, image: award12 },
// ];

// const AwardsTimeline = () => {
//   const [selectedYear, setSelectedYear] = useState("All");

//   const years = ["All", ...new Set(awardsData.map(a => a.year))];

//   const filteredAwards =
//     selectedYear === "All"
//       ? awardsData
//       : awardsData.filter(a => a.year === selectedYear);

//   return (
//     <>
//     <HeroImg image={Img}> Awards and Recognition</HeroImg>
//     <div className="awards-container">

//       {/* <h1>Our Awards</h1> */}
//       <div className="filter">
//         <label>Filter by year : </label>
//        {" "} <select
//           value={selectedYear}
//           onChange={e => setSelectedYear(Number(e.target.value) || "All")}
//         >
//           {years.map((year, idx) => (
//             <option key={idx} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="awards-grid">
//         {filteredAwards.map((award, idx) => (
//           <AwardCard
//             key={idx}
//             title={award.title}
//             year={award.year}
//             image={award.image}
//           />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default AwardsTimeline;
