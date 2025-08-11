import React from "react";
import section from "../Asset/logo/download.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Timeline = (props) => {
  const { timelineData, Title, backgroundImage, position } = props;

  return (
    <>
      <h1 className="heading-title">{Title}</h1>

      {position === "left" && (
        <>
          <img src={section} alt="section" className="section-img" />
          <div className="row margin-top-80 display-flex">
            <div className="col-md-6">
              <DotLottieReact
                 src={backgroundImage}
                loop
                autoplay
                className="opacity-9"
              />
            </div>
            <div className="col-md-6">
              {timelineData.map((item) => (
                <>
                  <div className="card experience-card" key={item.id}>
                    <div className="card-header ">{item.title}</div>
                    <div className="card-body">
                      <img
                        src={item.img}
                        alt=""
                        height={50}
                        width={50}
                        className="company-img"
                      />
                      <figure>
                        <blockquote className="blockquote">
                          <p>{item.description}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                          <cite title="Source Title">{item.company}</cite>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {item.id < timelineData.length && (
                    <div className="arrow-down"></div>
                  )}
                </>
              ))}
            </div>
          </div>
        </>
      )}
      {position === "right" && (
        <>
          <img src={section} alt="section" className="section-img right-0" />
          <div className="row margin-top-80 display-flex">
            <div className="col-md-6 padding-left-150px">
              {timelineData.map((item) => (
                <>
                  <div className="card experience-card" key={item.id}>
                    <div className="card-header ">{item.title}</div>
                    <div className="card-body">
                      <img
                        src={item.img}
                        alt=""
                        height={50}
                        width={50}
                        className="company-img"
                      />
                      <figure>
                        <blockquote className="blockquote">
                          <p>{item.description}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                          <cite title="Source Title">{item.company}</cite>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {item.id < timelineData.length && (
                    <div className="arrow-down margin-left--40px"></div>
                  )}
                </>
              ))}
            </div>
            <div className="col-md-6">
              {/* // webp image loading */}
              <DotLottieReact
                src={backgroundImage}
                loop
                autoplay
                className="opacity-9"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

Timeline.propTypes = {};

export default Timeline;
