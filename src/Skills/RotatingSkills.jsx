import AWS from "../Asset/Skills/aws.svg";
import bootstrap from "../Asset/Skills/bootstrap.png";
import css from "../Asset/Skills/css3.svg";
import git from "../Asset/Skills/git.svg";
import html from "../Asset/Skills/html-5.svg";
import Jenkins from "../Asset/Skills/jenkins.svg";
import Jira from "../Asset/Skills/jira.svg";
import javascript from "../Asset/Skills/js.png";
import MaterialUI from "../Asset/Skills/material-ui.svg";
import nodeJs from "../Asset/Skills/nodejs.svg";
import postman from "../Asset/Skills/postman-api.svg";
import react from "../Asset/Skills/react.svg";
import redux from "../Asset/Skills/redux.svg";
import sass from "../Asset/Skills/sass.svg";
import slack from "../Asset/Skills/slack-new.svg";
import testingLibrary from "../Asset/Skills/react_testing_libraries.png";
import typescript from "../Asset/Skills/typescript.png";
const RotatingSkills = () => {
  const skills = [
    { name: "AWS", level: "Advanced", icon: AWS },
    { name: "Bootstrap", level: "Intermediate", icon: bootstrap },
    { name: "CSS", level: "Advanced", icon: css },
    { name: "Git", level: "Advanced", icon: git },
    { name: "HTML", level: "Advanced", icon: html },
    { name: "Jenkins", level: "Intermediate", icon: Jenkins },
    { name: "Jira", level: "Intermediate", icon: Jira },
    { name: "JavaScript", level: "Advanced", icon: javascript },
    { name: "Material UI", level: "Intermediate", icon: MaterialUI },
    { name: "Node.js", level: "Intermediate", icon: nodeJs },
    { name: "Postman", level: "Intermediate", icon: postman },
    { name: "React", level: "Advanced", icon: react },
    { name: "Redux", level: "Intermediate", icon: redux },
    { name: "Sass", level: "Intermediate", icon: sass },
    { name: "Slack", level: "Intermediate", icon: slack },
    { name: "Testing Library", level: "Intermediate", icon: testingLibrary },
    { name: "TypeScript", level: "Intermediate", icon: typescript },
  ];

  return (
    <>
      <h1 className="heading-title">MY SKILLS</h1>
      <div className="rotating-skills">
        <div className="skill-list display-flex">
          {skills?.map((s, i) => (
            <div className="skill-icon" key={i}>
              <img src={s.icon} alt={s.name} height={100} width={100} loading="lazy"/>
              <p>{s.name}</p>
            </div>
          ))}
          {skills?.map((s, i) => (
            <div className="skill-icon" key={i}>
              <img src={s.icon} alt={s.name} height={100} width={100} loading="lazy"/>
              <p>{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RotatingSkills;
