import React from "react";
import TeamDetail from "./TeamDetail";
import sonalImg from "../imgs/team/att-1.webp"; // Using same image path

const TeamDetail2 = () => {
  return (
    <TeamDetail
      name="Faizur Rehman"
      position="Partner"
      email="faizurrehman@akspartners.in"
      image={sonalImg}
       phone={"91123456789"}
      linkedIn={"https://www.linkedin.com/"}
      sections={[
        {
          title: "Experience",
          content: [
            "With an illustrious professional journey spanning well above two decades, Faizur Rehman stands as a distinguished practitioner in the realm of Energy and Infrastructure sector. As a trusted legal partner for both local and international corporate clients, he combines a profound understanding of sector with a global perspective, leveraging his exposure to both national and international energy landscapes. Beyond transactional prowess, Faizur’s in-depth knowledge extends to the subtle details of infrastructure, allowing him to bring a wealth of practical experience to the table.",
            "With a background at valued organizations like Schneider Electric, Hero Group, and Uber India, Faizur’s recent accomplishments include establishing a groundbreaking Joint Venture between Fortum & Chempolis from Finland and Numaligarh Refinery Limited (NRL), for a pioneering 2G Ethanol Biorefinery in Assam, with estimated investments of over 400 MEUR. With his commitment and understanding of business, he was chosen as Head of Business & Country Director to drive challenging Bio2X business in India. Faizur triumphed in his role and developed Bio2X further in India, through strategic partnership agreements with NTPC, EIL, CHT, IPRITI, agricultural universities and key private players, which will shape up business in India.",
            "With multiple industry experience and journey starting as in-house counsel and company secretary to becoming a business leader, Faizur is moving ahead to his core expertise in practicing Law. His exposure to the business side and understanding the practical nuances of the Client`s business in the realm of energy and infrastructure not only set him apart, but positions him as a key figure shaping the trajectory of the renewable energy sector in India and providing most suitable legal solutions.",
            "Faizur understands the challenge of high capex, highly regulated business landscape of the energy sector and knows how to mitigate risk and deliver legally compliant business growth.",
            "Faizur is regularly invited as a distinguished speaker at numerous forums and his extensive knowledge is reflected in a substantial portfolio of published articles and interviews. He has also served as an esteemed member of the Confederation of Indian Industry (CII) National Committee on Bioenergy (Ethanol) from 2020-21 to 2022-23.",
          ],
        },
        {
          title: "Publications",
          content: [
            'In 2017, Faizur was honored with the prestigious "Trailblazers" award, recognizing him as one of India\'s finest In-House Counsel by the Indian Corporate Counsel Association.',
          ],
        },
        {
          title: "Speakership Opportunities",
          content: [
            "World Future Fuel Summit & Expo 2022",
            "CII Webinar on Ethanol Roadmap for 2025 – Demystifying ethanol project financing for lenders",
            "Invest India roundtable discussion on ‘Sustainability and Circularity in Textiles – Experiences and Leading Practices’",
            "Speaker at 4th World Future Fuel Summit & Expo 2023 at New Delhi, India",
            "Leadership Talk series on Acceleration towards Natural Resource Efficiency with IPMX (one Year MBA) of Indian Institute of Management, Lucknow",
            "Speaker in the panel discussion on Bio-Fuels at the Global Bio-India 2019",
            "Speaker at CII Bioenergy Summit, 2019",
          ],
        },
        {
          title: "Interviews",
          content: [
            "Interview published in Energetica India Magazine, April 2022",
            'Interview with Textile Magazine, discussing "Making Fiber Sustainability A Reality"',
            "Interview with Fibre2Fashion on the potential of textile fiber from biomass, 2019",
          ],
        },
        {
          title: "Articles",
          content: [
            'International Business Times (IBT) titled "HOW BIOBASED SOLUTIONS CAN CHANGE LIVES FOREVER"',
          ],
        },
        {
          title: "Educational Qualification",
          content: [
            "Fellow Member of the Institute of Company Secretaries of India (2005)",
            "LL.B. from University of Delhi (2007)",
            "Certificate-holder in the Executive Program in Business Management from IIM Calcutta (2019)",
            "Qualified Independent Director, from Indian Institute of Corporate Affairs (2022)",
          ],
        },
      ]}
    />
  );
};

export default TeamDetail2;
