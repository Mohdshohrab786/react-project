import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./mock.css";

const splitText = (text) =>
  text.split("").map((char, i) => ({ char, key: `${char}-${i}` }));

const AnimeText = () => {
  const aksLetters = splitText("AKS");
  const partnersLetters = splitText("PARTNERS");

  // Hook to control animation
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // or false if you want it to play every time
    threshold: 0.4, // % of section visible to trigger
  });

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="aks-hero-wrapper" ref={ref}>
      <div className="aks-hero-row">
        {/* AKS */}
        <motion.div
          className="aks-left"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {aksLetters.map(({ char, key }, index) => (
            <motion.span
              key={key}
              className="letter-wrapper"
              custom={index}
              variants={revealLeft}
            >
              <span className="letter">{char}</span>
            </motion.span>
          ))}
        </motion.div>

        {/* PARTNERS */}
        <motion.div
          className="aks-right"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div className="partners-text">
            {partnersLetters.map(({ char, key }, index) => (
              <motion.span
                key={key}
                className="letter-wrapper"
                custom={index}
                variants={revealRight}
              >
                <span className="letter">{char}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* Subtext */}
          <motion.div
            className="subtext"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.1, duration: 0.8, ease: "easeInOut" }}
          >
            Advocates<span>|</span>Solicitors<span>|</span>Consultants
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimeText;

// Same animation variants (keep your smoother settings)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const revealLeft = {
  hidden: { x: 40, opacity: 0, filter: "blur(6px)" },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const revealRight = {
  hidden: { x: -40, opacity: 0, filter: "blur(6px)" },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};
