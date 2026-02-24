import React from "react";
import Slider from "react-slick";
import "./Team.css"; // Add custom styles here
import Container from "../Materials/Container";
import "./Team.css";
import Team1 from "../imgs/team/att-1.webp";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container
      title={"Meet Our Attorneys"}
      placeholder={"grey"}
      space="container"
    >
      <Slider {...settings}>
        <div className="team-card">
          <img src={Team1} alt="team-member" />
          <div className="team-text">
            <h4>John Doe</h4>
            <p>Partner</p>
            <span>
              Biography Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </span>
            <a href="#" className="social-link">
              Read Profile
            </a>
          </div>
        </div>
        <div className="team-card">
          <img src={Team1} alt="team-member" />
          <div className="team-text">
            <h4>Jane Smith</h4>
            <p>Associate</p>
            <span>
              Biography Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </span>
            <a href="https://www.Read Profile.com" className="social-link">
              Read Profile
            </a>
          </div>
        </div>
        <div className="team-card">
          <img src={Team1} alt="team-member" />
          <div className="team-text">
            <h4>Jane Smith</h4>
            <p>Associate</p>
            <span>
              Biography Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </span>
            <a href="https://www.Read Profile.com" className="social-link">
              Read Profile
            </a>
          </div>
        </div>
        <div className="team-card">
          <img src={Team1} alt="team-member" />
          <div className="team-text">
            <h4>Jane Smith</h4>
            <p>Associate</p>
            <span>
              Biography Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </span>
            <a href="https://www.Read Profile.com" className="social-link">
              Read Profile
            </a>
          </div>
        </div>
        <div className="team-card">
          <img src={Team1} alt="team-member" />
          <div className="team-text">
            <h4>Jane Smith</h4>
            <p>Associate</p>
            <span>
              Biography Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </span>
            <a href="https://www.Read Profile.com" className="social-link">
              Read Profile
            </a>
          </div>
        </div>
        <div className="team-card">
          <img src={Team1} alt="team-member" />
          <div className="team-text">
            <h4>Mike Johnson</h4>
            <p>Paralegal</p>
            <span>
              Biography Cras justo odio, dapibus ac facilisis in, egestas eget
              quam.
            </span>
            <a href="https://www.Read Profile.com" className="social-link">
              Read Profile
            </a>
          </div>
        </div>
        {/* Add more team members here */}
      </Slider>
    </Container>
  );
};

export default Team;

// import React from "react";
// import Container from "../Materials/Container";
// import "./Team.css";

// const Team = () => {
//   return (
//     <Container
//       title={"Meet Our Attorneys"}
//       placeholder={"grey"}
//       space="container"
//     ></Container>
//   );
// };

// export default Team;
