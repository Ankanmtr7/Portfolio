import Trainee from '../Asset/logo/work-progress_15700537.gif'
import sde from '../Asset/logo/programmer_17122569.gif';
import ssde from '../Asset/logo/api_17122773.gif';
import Timeline from "../CommonComponent/Timeline";
const Experience = () => {
  const experienceData = [
     {
      id: 1,
      title: "(SEPT 2023 - PRESENT)",
      description: "SENIOR SOFTWARE ENGINEER",
      img: ssde,
      company: "Persistent Systems"
    },
    
    {
      id: 2,
      title: "(FEB 2022 - AUG 2023)",
      description: "SOFTWARE ENGINEER",
      img: sde,
      company: "Persistent Systems"
    },
    {
      id: 3,
      title: "(SEPT 2021 - JAN 2022)",
      description: "TRAINEE SOFTWARE ENGINEER",
      img: Trainee,
      company: "Persistent Systems"
    }
   
  ]
  return (
    <Timeline
      timelineData={experienceData}
      Title="Experience"
      position="left"
      backgroundImage="https://lottie.host/d2042679-85ba-473e-a5a0-03925f1de727/6jqe8DW3gC.lottie"
    />
  );
};

Experience.propTypes = {};

export default Experience;
