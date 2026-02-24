// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Container from "../../Materials/Container";
// import "./Testimonials.css";
// import SectionContainer from "../../Materials/Section/Section";
// import Heading from "../../Materials/Heading2/Heading";
// import Link from "../../Materials/Buttons/Button";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import client1 from "../../imgs/clients/1.png"

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
// // 
// // const logos = [
// //   {
// //     img: "",
// //     text: "Microsoft – Empowering every person and organization on the planet.",
// //   },
// //   {
// //     img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
// //     text: "Apple – Innovation meets elegance in every product.",
// //   },
// //   {
// //     img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
// //     text: "IBM – Building smarter businesses through technology.",
// //   },
// //   {
// //     img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
// //     text: "Google – Organizing the world's information.",
// //   },
// //   {
// //     img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
// //     text: "Netflix – The world’s leading streaming entertainment service.",
// //   },
// //   {
// //     img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
// //     text: "Spotify – Music for every moment.",
// //   },
// // ];

// const logos = Array.from({ length: 10 }, (_, i) => ({
//   img: require(`../../imgs/clients/${i + 1}.png`)
// }));

// const Testimonials = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,

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
//     <SectionContainer>
//       <div className="container">
//         <div className="heading-wrapper">
//           <Heading title="Our Delighted Clients" color="green" />
//           <Link color="blue" />
//         </div>
//         <div className="logo-slider client-logos client-section-logo">
//           <Slider {...settings}>
//             {logos.map((logo, index) => (
//               <div className="logo-card" key={index}>
//                 <img src={logo.img} alt={`logo-${index}`} />
//                 {/* <p>{logo.text}</p> */}
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </SectionContainer>
//   );
// };

// export default Testimonials;import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";

import SectionContainer from "../../Materials/Section/Section";
import Heading from "../../Materials/Heading2/Heading";
import Link from "../../Materials/Buttons/Button";

const logos = Array.from({ length: 10 }, (_, i) => ({
  img: require(`../../imgs/clients/${i + 1}.png`),
}));

const Testimonials = () => {
  return (
    <SectionContainer>
      <div className="container">
        <div className="heading-wrapper">
          <Heading title="Our Delighted Clients" color="green" />
          <Link color="blue" />
        </div>

        <div className="logo-slider-wrapper client-logo-slider-wrapper">
          {/* Custom Arrows with icons */}
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
            autoplay={{ delay: 2000 }}
            loop={true}
            speed={600}
            spaceBetween={0}
            breakpoints={{
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="logo-card">
                  <img src={logo.img} alt={`client-${index}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
