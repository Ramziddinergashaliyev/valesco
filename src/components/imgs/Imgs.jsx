import React, { useEffect, useState } from "react";
import "./imgs.scss";
import img1 from "../../assets/images/sp-tec1.webp";
import img2 from "../../assets/images/sp-tec1.webp";
import img3 from "../../assets/images/sp-tec1.webp";
import img4 from "../../assets/images/sp-tec1.webp";
import img5 from "../../assets/images/sp-tec1.webp";
import img6 from "../../assets/images/sp-tec1.webp";
import img7 from "../../assets/images/sp-tec1.webp";

const Imgs = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // scroll 100px dan oshganda yoyiladi
      setExpanded(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="imgs-section">
      <div className={`imgs-container ${expanded ? "expanded" : ""}`}>
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
        <img src={img5} alt="img" />
        <img src={img6} alt="img" />
        <img src={img7} alt="img" />
      </div>
    </div>
  );
};

export default Imgs;
