// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components2/Navbar/Navbar";
import HeroSection from "./Components2/Hero/Hero";
import AksHeroSection from "./Components2/Follow/Follow";
import About from "./Components2/About/About";
import LawSection from "./Components2/About-2/About2";
import LogoSlider from "./Components2/Clients/Clients";
import NewsSlider from "./Components2/News/News";
import Testimonials from "./Components2/Testimonials/Testimonials";
import Footer from "./Components/Footer";
import Footer1 from "./Components2/footer-1/footer-1";
import Disclaimer from "./Components/Disclaimer";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import AboutPage from "./pages/About";
import NotableDeals from "./pages/NotableDeals";
import AwardsRecog from "./pages/AwardsRecog";
import Litigation from "./pages/Inner-PractisePages/litigation";
import Arbitration from "./pages/Inner-PractisePages/arbitration";
import GeneralCorporateAndCommercial from "./pages/Inner-PractisePages/general-corporate-and-commercial";
import PrivateEquityAndVentureCapital from "./pages/Inner-PractisePages/private-equity-and-venture-capital";
import StartUpsConsultancy from "./pages/Inner-PractisePages/start-ups-consultancy";
 import DebtFunding from "./pages/Inner-PractisePages/debt-funding";
import ContractManagement from "./pages/Inner-PractisePages/contract-management";
import LabourAndEmploymentLaws from "./pages/Inner-PractisePages/labour-and-employment-laws";
import IntellectualPropertyAndCyberLaw from "./pages/Inner-PractisePages/intellectual-property-and-cyber-law";
import ProjectAndFinance from "./pages/Inner-PractisePages/projects-and-project-finance";
import LegalMetrology from "./pages/Inner-PractisePages/legal-metrology";
import SoftwareAgreementAdvisory from "./pages/Inner-PractisePages/software-agreement-related-advisory";
import ITITES from "./pages/Inner-PractisePages/it-ites";
import MergersAndAcquisitions from "./pages/Inner-PractisePages/mergers-and-acquisitions";
import SecretarialCompliance from "./pages/Inner-PractisePages/secretarial-compliance";
 import CompetitionPractice from "./pages/Inner-PractisePages/competition-practice";
 import CorporateRegulatoryCompliance from "./pages/Inner-PractisePages/corporate-regulatory-compliance";
 import InfrastructureAndEnergy from "./pages/Inner-PractisePages/infrastructure-and-energy";
import CareerPage from "./pages/Careers";
import TeamDetail1 from "./pages/team-1";
import TeamDetail2 from "./pages/team-2";
import TeamDetail3 from "./pages/team-3";
import TeamDetail4 from "./pages/team-4";
import TeamDetail5 from "./pages/team-5";
import TeamDetail6 from "./pages/team-6";
import TeamDetail7 from "./pages/team-7";
import ApplicationForm from "./pages/ApplicationForm";
import Clients from "./pages/Clients";
import Sitemap from "./pages/FooterSiteMap";
// import ScrollToTop from "./pages/ScrollToTop";

// import Footer from "../Components/Footer";
// import Footer1 from "../Components2/footer-1/footer-1";

function App() {
  // const [agreed, setAgreed] = useState(false);

  
  // Check localStorage when app loads


  // const handleAgree = () => {
  //   setAgreed(true);
  // };

   const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(true); // user clicked agree
  };

  return (
    <>
     <Router>
    {/* {!agreed ? (
        <Disclaimer onAgree={() => setAgreed(true)} />
      ) : ( */}

        {!agreed && <Disclaimer onAgree={handleAgree} />}
        <>
        <Navbar />
          
           
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/Expertise" element={<Expertise />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/NotableDeals" element={<NotableDeals />} />
          <Route path="/Awards" element={<AwardsRecog />} />
           <Route path="/litigation" element={<Litigation />} />
<Route path="/Clients" element={<Clients/>}/>
  <Route path="/arbitration" element={<Arbitration />} />
  <Route path="/general-corporate-and-commercial" element={<GeneralCorporateAndCommercial />} />
  <Route path="/private-equity-and-venture-capital" element={<PrivateEquityAndVentureCapital />} />
<Route path="/start-ups-consultancy" element={<StartUpsConsultancy />} />
   <Route path="/debt-funding" element={<DebtFunding />} />
<Route path="/contract-management" element={<ContractManagement />} />
  <Route path="/labour-and-employment-laws" element={<LabourAndEmploymentLaws />} />
 <Route path="/intellectual-property-low-and-cyber-low" element={<IntellectualPropertyAndCyberLaw/>} />
    <Route path="/projects-and-project-finance" element={<ProjectAndFinance/>} />
<Route path="/legal-metrology" element={<LegalMetrology />} />
    <Route path="/software-agreement-related-advisory" element={<SoftwareAgreementAdvisory />} />
  <Route path="/it-ites" element={<ITITES />} />
   <Route path="/mergers-and-acquisitions" element={<MergersAndAcquisitions />} />
 <Route path="/secretarial-compliance" element={<SecretarialCompliance />} />
  <Route path="/competition-practice" element={<CompetitionPractice />} />
   <Route path="/corporate-regulatory-compliance" element={<CorporateRegulatoryCompliance />} />
   <Route path="/infrastructure-and-energy" element={<InfrastructureAndEnergy />} />
        <Route path="/Sonal-Kumar-Singh" element={<TeamDetail1 />} />
      <Route path="/Faizur-Rehman" element={<TeamDetail2 />} />
      <Route path="/Ayan-K-De" element={<TeamDetail3 />} />
      <Route path="/Ratik" element={<TeamDetail4 />} />
      <Route path="/Sukanya-Lal" element={<TeamDetail5 />} />
      <Route path="/Suraj-Raj-Kesherwani" element={<TeamDetail6 />} />
      <Route path="/Ekansh-Gupta" element={<TeamDetail7 />} />
      <Route path="/Careers" element={<CareerPage/>} />
        <Route path="/apply/:role" element={<ApplicationForm />} />
        {/* footer */}
       <Route path="/sitemap" element={ <Sitemap/>} /> 

   </Routes>
            <Footer /> </>
      {/* // )} */}
      </Router>
    </>
  );
}

export default App;
