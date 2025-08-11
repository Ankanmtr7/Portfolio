import { useRef } from "react";
import About from "./About/About";
import Coding from "./About/Coding";
import "./App.css";
import Contact from "./Contact/contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import Hero from "./Header/Hero";
import MyProject from "./Project/MyProject";
import RotatingSkills from "./Skills/RotatingSkills";
function App() {
  const HeroRef = useRef(null);
  const AboutRef = useRef(null);
  const ExperienceRef = useRef(null);
  const ProjectRef = useRef(null);
  const EducationRef = useRef(null);  
  const SkillsRef = useRef(null);
  const ContactRef = useRef(null);
  const headerOffset = 85; // Adjust this value based on your header height
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop - headerOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  const AllRef ={
    HeroRef,
    AboutRef,
    ExperienceRef,
    ProjectRef,
    EducationRef,
    SkillsRef,
    ContactRef
  };
  return (
    <div className="App">
     <Header scrollToSection={scrollToSection} AllRef={AllRef} />
     <section className="Section-hero" ref={HeroRef}><Hero /></section>
     <section className="Section-coding"><Coding /></section>
     <section className="Section-about" ref={AboutRef}><About /></section>
     <section className="Section-experience" ref={ExperienceRef}><Experience /></section>
     <section className="Section-skills" ref={SkillsRef}><RotatingSkills /></section>
     <section className="Section-projects" ref={ProjectRef}><MyProject /></section>
     <section className="Section-education" ref={EducationRef}><Education /></section>
     <section className="Section-contact" ref={ContactRef}><Contact /></section>
    </div>
  );
}

export default App;
