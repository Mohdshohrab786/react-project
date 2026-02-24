
import React, { useState } from "react";
import Img from "../imgs/carousel/img-1.jpg";
import HeroImg from "../Materials/Hero/HeroImg";
import Img1 from "../imgs/clients/1.png";
import ImgHero from "../imgs/carousel/img-2.jpg";


 const clientImages = [];
for (let i = 1; i <= 28; i++) {
  clientImages.push(require(`../imgs/clients/${i}.png`));
}

// Example client names (you can replace with real names)
const clientNames = Array.from({ length: 28 }, (_, i) => `Client ${i + 1}`);

const clients = clientImages.map((img, idx) => ({
  id: idx + 1,
  name: clientNames[idx],
  logo: img
}));
export default function Clients() {


  return (
    <>
      <HeroImg image={ImgHero}>Our Delighted Clients</HeroImg>
    <div style={styles.page}>

      <div style={styles.grid}>
        {clients.map((client) => (
          <div key={client.id} style={styles.card}>
            <img src={client.logo} alt={client.name} style={styles.logo} />
            {/* <strong style={styles.clientName}>{client.name}</strong> */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

const styles = {
  page: {
    maxWidth: 1100,
    margin: "36px auto",
    padding: "20px",
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#223",
  },
  title: { color: "#07565c" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 30,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
    borderRadius: 12,
    border: "1px solid #e6e6e6",
    background: "#fff",
  },
  logo: { width: "250px", height: "200px", objectFit: "contain"},
  clientName: { color: "#07565c" },
};
