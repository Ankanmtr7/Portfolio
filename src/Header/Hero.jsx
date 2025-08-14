import React from "react";
import heroBanner from "../Asset/logo/Hero-img.webp";
import { MoveToBottomIcon } from "@primer/octicons-react";

const Hero = () => {
  return (
    <div className="App-content text-light container">
      <div className="row">
        <div className="col-16 col-md-6 position-relative">
          <div className="hero-banner">
            <img src={heroBanner} alt="Hero Banner" className="img-fluid" height={636} width={636} loading="eager"/>
          </div>
        </div>
        <div className="hero-text col-3 col-md-3 position-relative">
          <div className="position-relative top-30 text-start">
            <h1 className="text-light">ANKAN MITRA</h1>
            <p className="text-light">Creative Web & App Developer</p>
            <p className="hero-description">
              Hi, I’m Ankan Mitra and I am creative web & app developer who
              dream making the world better place by creating captivating
              products.
            </p>
            <br />
            <br />
            <p className="download text-end position-relative" onClick={()=>{window.open('https://drive.google.com/file/d/1Qbiuc_Vt1HQcYqqJEzfRga5P24cs9eVk/view', '_blank')}}>
              Download Resume <MoveToBottomIcon size={14} className="ms-2 downloadIcon" />
              <span className="circle"></span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
