import React from "react";
import useThrottle from "../CustomHook/useThrottle";
const Coding = () => {
  const [firstLineScroll, setFirstLineScroll] = React.useState(100);
  const [secondLineScroll, setSecondLineScroll] = React.useState(100);
  const [thirdLineScroll, setThirdLineScroll] = React.useState(100);
  const [fourthLineScroll, setFourthLineScroll] = React.useState(100);
  const [fifthLineScroll, setFifthLineScroll] = React.useState(false);
  const scrollLetter = () => {
    window.addEventListener("scroll", () => {
      console.log("scrollLetter called");
      const scrollPosition = window.scrollY;
      if(scrollPosition < 400) {
        setFirstLineScroll(100);
        setSecondLineScroll(100);
        setThirdLineScroll(100);
        setFourthLineScroll(100);
        setFifthLineScroll(false);
      }
      if (scrollPosition > 420 && scrollPosition < 620) {
        setFirstLineScroll((620 - scrollPosition) / 2);
      }
      if (scrollPosition > 620 && scrollPosition < 820) {
        setSecondLineScroll((820 - scrollPosition) / 2);
      }
      if (scrollPosition > 820 && scrollPosition < 1020) {
        setThirdLineScroll((1020 - scrollPosition) / 2);
      }
      if (scrollPosition > 1020 && scrollPosition < 1220) {
        setFourthLineScroll((1220 - scrollPosition) / 2);
      }
      if (scrollPosition > 1220) {
        setFifthLineScroll(true);
        setFirstLineScroll(0);
        setSecondLineScroll(0);
        setThirdLineScroll(0);
        setFourthLineScroll(0);
      }
    });
  };
  const throttledScrollLetter = useThrottle(scrollLetter, 1000);
  React.useEffect(() => {
    throttledScrollLetter();
    return () => {
      window.removeEventListener("scroll", throttledScrollLetter);
    };
  }, [window.screenX]);
  return (
    <div className="coding">
      <div
        className="firstLine"
        style={{ backgroundPositionX: `${firstLineScroll}%` }}
      >
        CODING IS
      </div>
      <div
        className="secondLine"
        style={{ backgroundPositionX: `${secondLineScroll}%` }}
      >
        MORE THAN
      </div>
      <div
        className="thirdLine"
        style={{ backgroundPositionX: `${thirdLineScroll}%` }}
      >
        JUST WRITING
      </div>
      <div
        className="fourthLine"
        style={{ backgroundPositionX: `${fourthLineScroll}%` }}
      >
        CODE
      </div>

      {fifthLineScroll && (
        <h1 className="poppins-bold fade-transition">
          IT'S ABOUT SOLVING PROBLEMS AND CREATING SOLUTIONS
        </h1>
      )}
    </div>
  );
};

export default Coding;
