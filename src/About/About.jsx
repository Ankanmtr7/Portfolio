import React from "react";
import heroBanner from "../Asset/logo/About-img.jpeg";
const About = () => {
  return (
    <div className="about">
      <h1 className="heading-title">ABOUT ME</h1>
      <div className="row about-content">
        <div className="col-md-6 about-text">
          <h2>Who I Am</h2>
          <p>
            My name is ANKAN MITRA. I am a professional and enthusiastic programmer
            in my daily life. I am a quick learner with a self-learning
            attitude. I love to learn and explore new technologies and am
            passionate about problem-solving. I love almost all the stacks of
            web application development and love to make the web more open to
            the world. My core skill is based on JavaScript and I love to do
            most of the things using JavaScript. I am available for any kind of
            job opportunity that suits my skills and interests.
          </p>
        </div>
        <div className="col-md-6">
          <img src={heroBanner} alt="About Me" className="about-img" height={400} width={400} loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default About;
