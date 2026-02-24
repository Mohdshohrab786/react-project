// TypingEffect.js
import React, { useState, useEffect } from "react";
import "./Typing.css";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h2 style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
      {displayedText}
      <span className="cursor">|</span>
    </h2>
  );
};

export default TypingEffect;
