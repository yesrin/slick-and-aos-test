import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ImageScroll.scss";

const Imagescroll = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className="container">
      <div className="box_right" data-aos="fade-right">
        <p>AOS 테스트1</p>
      </div>
      <div className="box_left" data-aos="fade-left">
        <p>AOS 테스트2</p>
      </div>
      <div className="box_right" data-aos="fade-right">
        <p>AOS 테스트3</p>
      </div>
      <div className="box_left" data-aos="fade-left">
        <p>AOS 테스트4</p>
      </div>
      <div className="box_right" data-aos="fade-right">
        <p>AOS 테스트5</p>
      </div>
      <div className="box_left" data-aos="fade-left">
        <p>AOS 테스트6</p>
      </div>
    </div>
  );
};

export default Imagescroll;
