// Components/Disclaimer.js
import React from "react";
import "./Disclaimer.css";

function Disclaimer({ onAgree }) {
  return (
    <div className="disclaimer-wrapper"
      // style={{
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   bottom: 0,
      //   background: "rgba(0,0,0,0.8)",
      //   color: "#fff",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   zIndex: 9999,
      //   padding: "2rem",
      //   textAlign: "center",
       
      // }}
    >
      <div className="disclaimer-inner" 
      // style={{ background: "#191919", padding: "2rem", borderRadius: "12px", maxWidth: "800px" }}
      >
        <h2>DISCLAIMER AND CONFIRMATION</h2>
        <p 
        // style={{ fontSize: "14px", lineHeight: "1.6" }}
        >
          Current rules of the Bar Council of India impose restrictions on maintaining a web page
          and do not permit lawyers to provide information concerning their areas of practice. 
          AKS Partners is, therefore, constrained from providing any further information on this web page.
          <br /><br />
          The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. 
          By clicking on ‘I AGREE’, the user acknowledges that the user wishes to gain more information about 
          AKS Partners, its practice areas and its attorneys, for his/her own information and use;
          <br /><br />
          None of the information contained on the website is in the nature of a legal opinion or otherwise amounts 
          to any legal advice. AKS Partners is not liable for any consequence of any action taken by the user relying 
          on material/information provided under this website.
        </p>
        <button 
          onClick={onAgree} 
          type="button"
          // style={{
          //   marginTop: "1rem",
          //   padding: "0.75rem 1.5rem",
          //   border: "none",
          //   borderRadius: "6px",
          //   background: "#07565c",
          //   color: "#fff",
          //   cursor: "pointer",
          //   fontSize: "16px"
          // }}
        >
          I AGREE
        </button>
      </div>
    </div>
  );
}

export default Disclaimer;
