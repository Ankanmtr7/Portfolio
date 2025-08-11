import Timeline from "../CommonComponent/Timeline";
import btech from "../Asset/logo/graduate_12035096.gif";
import higherSecondary from "../Asset/logo/learning_16678475.gif";
import secondary from "../Asset/logo/world-book-day_18998802.gif";
const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "(APR 2017 - JUN 2021)",
      description: "BACHELOR OF TECHNOLOGY",
      img: btech,
      company: "Maulana Abul Kalam Azad University of Technology, West Bengal",
    },
    {
      id: 2,
      title: "(MAR 2015 - FEB 2017)",
      description: "HIGHER SECONDARY CERTIFICATE",
      img: higherSecondary,
      company: "West Bengal Council of Higher Secondary Education",
    },
    {
      id: 3,
      title: "(FEB 2014 - FEB 2015)",
      description: "SECONDARY SCHOOL CERTIFICATE",
      img: secondary,
      company: "West Bengal Board of Secondary Education",
    },
  ];
  return (
    <Timeline
      timelineData={educationData}
      Title="Education"
      position="right"
      backgroundImage="https://lottie.host/1b25487c-dd8f-4c07-9efc-d96ce32b5811/TmyIi3vyuy.lottie"
    />
  );
};

Education.propTypes = {};

export default Education;
