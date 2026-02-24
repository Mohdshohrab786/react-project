// src/Components/NewsSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./News.css";
import ImgSection from "../../Materials/img-section/img-sec";
import Heading from "../../Materials/Heading2/Heading";
import ImgNews from "../../imgs/carousel/img-1.jpg";
import Link from "../../Materials/Buttons/Button";

const newsItems = [
  {
    image: ImgNews,
    title: "Litigation vs. Arbitration: Choosing the Right Path for Your Business Dispute",
    description: "Facing a major business conflict? Understand the key differences in cost, timeline, privacy, and control between taking a case to court (litigation) and resolving it through private arbitration.",
  },
  {
    image: ImgNews,
    title: "Beyond the Term Sheet: Essential Legal Due Diligence for Investors and Founders",
    description: "For PE/VC investors and startups alike, thorough due diligence is critical. We outline the key legal areas—from IP ownership to cap table hygiene—that must be vetted to secure a successful investment.",
  },
  {
    image: ImgNews,
    title: "From Idea to Incorporation: The 5 Legal Must-Dos for Every New Startup",
    description: "Launching your startup? Don't let legal oversights derail your growth. This guide covers the non-negotiable first steps, from choosing the right business structure to protecting your intellectual property.",
  },
  {
    image: ImgNews,
    title: "Navigating Debt Financing: Understanding Covenants, Security, and Your Obligations",
    description: " Securing a loan is one thing; understanding the fine print is another. We decode common terms in debt agreements to help borrowers understand their commitments and avoid potential pitfalls.",
  },
  {
    image: ImgNews,
    title: "Remote Work Policies: A Legal Checklist for Protecting Your Company and Employees",
    description: "The hybrid work model is here to stay. Ensure your remote work policy is legally sound, covering data security, work hours, expense reimbursement, and health and safety obligations."
}];

const NewsSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="custom-dots">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="dot" />,
  };

  return (
    <ImgSection space={"container"}>
      <div className="heading-wrapper">
        <Heading title="Fresh Updates" color="green" />
        <Link color="green" />
      </div>
      <div className="swiper-wrapper-container">
    <Swiper
  modules={[Pagination, Autoplay]}
  slidesPerView={3}
  spaceBetween={20}
  loop={true}
  autoplay={{ delay: 3000 }}
  pagination={{
    clickable: true,
    el: ".custom-swiper-pagination",
    bulletClass: "custom-bullet",
    bulletActiveClass: "custom-bullet-active",
  }}
  breakpoints={{
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 768px (tablet)
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is < 768px (mobile)
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  }}
>
          {newsItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="news-card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination"></div>
      </div>
    </ImgSection>
  );
};

export default NewsSlider;
