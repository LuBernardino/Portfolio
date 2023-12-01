import React, { useState, useEffect } from "react";
import "./BackgroundStar.css";

export default function BackgroundStar() {
  const [starsGroup1Styles, setStarsGroup1Styles] = useState("");
  const [starsGroup2Styles, setStarsGroup2Styles] = useState("");
  const [starsGroup3Styles, setStarsGroup3Styles] = useState("");

  useEffect(() => {
    setStarsGroup1Styles(randomStars(900));
    setStarsGroup2Styles(randomStars(300));
    setStarsGroup3Styles(randomStars(200));
  }, []);

  function randomStars(n) {
    let value = `${Math.floor(Math.random() * 2000 + 2)}px ${Math.floor(
      Math.random() * 6000 + 2
    )}px #FFF`;
    for (let i = 0; i < n; i = i + 2) {
      value = `${value} , ${Math.floor(Math.random() * 2000 + 2)}px ${Math.floor(
        Math.random() * 6000 + 2
      )}px #FFF`;
    }
    return value;
  }

  return (
    <div>
      <div id="stars-group1" style={{ boxShadow: starsGroup1Styles }}></div>
      <div id="stars-group2" style={{ boxShadow: starsGroup2Styles }}></div>
      <div id="stars-group3" style={{ boxShadow: starsGroup3Styles }}></div>
    </div>
  );
}
