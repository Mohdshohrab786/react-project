import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Clients.css";

import SectionContainer from "../../Materials/Section/Section";
import Heading from "../../Materials/Heading2/Heading";
import Link2 from "../../Materials/Buttons/Button";

import Img1 from "../../imgs/awards/awards/img-1.png";
import Img2 from "../../imgs/awards/awards/img-2.png";
import Img3 from "../../imgs/awards/awards/img-3.png";
import Img4 from "../../imgs/awards/awards/img-4.png";
import Img5 from "../../imgs/awards/awards/img-5.png";
import Img6 from "../../imgs/awards/awards/img-6.png";
import Img7 from "../../imgs/awards/awards/img-7.png";
import Img8 from "../../imgs/awards/awards/img-8.png";
import Img9 from "../../imgs/awards/awards/img-9.png";
import Img10 from "../../imgs/awards/awards/img-10.png";
import Img11 from "../../imgs/awards/awards/img-11.png";
import Img12 from "../../imgs/awards/awards/img-12.jpg";

const logos = [
  { img: Img1, text: "Legal Excellence" },
  { img: Img2, text: "Client Choice" },
  { img: Img3, text: "Top Firm" },
  { img: Img4, text: "Best Counsel" },
  { img: Img5, text: "Innovation Award" },
  { img: Img6, text: "Arbitration Star" },
  { img: Img7, text: "Rising Firm" },
  { img: Img8, text: "M&A Leader" },
  { img: Img9, text: "Compliance Pro" },
  { img: Img10, text: "Law Tech" },
  { img: Img11, text: "Dispute Expert" },
  { img: Img12, text: "Global Honor" },
];

const LogoSlider = () => {
  return (
    <SectionContainer space="container">
      <div className="container">
        <div className="heading-wrapper">
          <Heading title="Awards & Recognition" color="green" />
          <Link2 color="blue" />
        </div>

        <div className="logo-slider-wrapper">
          {/* Custom arrows */}
          <div className="custom-arrow prev swiper-button-prev">
            <FaArrowLeft />
          </div>
          <div className="custom-arrow next swiper-button-next">
            <FaArrowRight />
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            speed={600}
            spaceBetween={20}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
            500: { slidesPerView: 2 },
            400: { slidesPerView: 1},
              0: { slidesPerView: 1 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="logo-card-awards first-logos-slider">
                  <div className="logo-img-wrapper">
                    <img src={logo.img} alt={`logo-${index}`} />
                  </div>
               
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LogoSlider;


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Container from "../../Materials/Container";
// import SectionContainer from "../../Materials/Section/Section";
// import "./Clients.css";
// import Heading from "../../Materials/Heading2/Heading";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Link2 from "../../Materials/Buttons/Button";
// import Img1 from "../../imgs/awards/awards/img-1.png";
// import Img2 from "../../imgs/awards/awards/img-2.png";
// import Img3 from "../../imgs/awards/awards/img-3.png";
// import Img4 from "../../imgs/awards/awards/img-4.png";
// import Img5 from "../../imgs/awards/awards/img-5.png";
// import Img6 from "../../imgs/awards/awards/img-6.png";
// import Img7 from "../../imgs/awards/awards/img-7.png";
// import Img8 from "../../imgs/awards/awards/img-8.png";
// import Img9 from "../../imgs/awards/awards/img-9.png";
// import Img10 from "../../imgs/awards/awards/img-10.png";
// import Img11 from "../../imgs/awards/awards/img-11.png";
// import Img12 from "../../imgs/awards/awards/img-12.jpg";
// import { Link } from "react-router-dom";

// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="custom-arrow next" onClick={onClick}>
//       <FaArrowRight />
//     </div>
//   );
// };

// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="custom-arrow prev" onClick={onClick}>
//       <FaArrowLeft />
//     </div>
//   );
// };

// const logos = [
//   { img: Img1, text: "Legal Excellence" },
//   { img: Img2, text: "Client Choice" },
//   { img: Img3, text: "Top Firm" },
//   { img: Img4, text: "Best Counsel" },
//   { img: Img5, text: "Innovation Award" },
//   { img: Img6, text: "Arbitration Star" },
//   { img: Img7, text: "Rising Firm" },
//   { img: Img8, text: "M&A Leader" },
//   { img: Img9, text: "Compliance Pro" },
//   { img: Img10, text: "Law Tech" },
//   { img: Img11, text: "Dispute Expert" },
//   { img: Img12, text: "Global Honor" },
// ];

// const LogoSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,

//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <SectionContainer space="container">
//       <div className="container">
//         <div className="headings-wrapper">
//           <Heading title="Awards & Recognition" color="green" />
//           <Link2 color="blue" />
//         </div>

//         <div className="logo-slider">
//           <Slider {...settings}>
//             {logos.map((logo, index) => (
//               <div className="logo-card-awards" key={index}>
//                 <div className="logo-img-wrapper">
//                   <img src={logo.img} alt={`logo-${index}`} />
//                 </div>
//                 <p>{logo.text}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </SectionContainer>
//   );
// };

// export default LogoSlider;
