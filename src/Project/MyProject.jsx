import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import aerotor from "../Asset/Project/Aerotor.png";
import Supplies from "../Asset/Project/checkandSupplies.jpg";
import Porfolio from "../Asset/Project/Portfolio.png";
import Coupon from "../Asset/Project/Coupon.jpeg";
import Report from "../Asset/Project/Report.png";
const MyProject = () => {
  const ProjectDetails = [
    {
      title: "Aerotor - flight ticket booking app",
      description:
        "An airline reservation system that allows users to book tickets online, view flight schedules, and manage their bookings.",
      technologies: [
        "Angular",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "SQL",
        "Spring Boot",
        "JAVA",
      ],
      image: aerotor,
      git: "https://github.com/abwat/Airline-Reservation-System",
      link: "https://www.youtube.com/watch?v=tTVIxwbHEzA",
    },
    {
      title: "Checks and Supplies Printing App",
      description:
        "A web application for printing checks with customizable templates. Users can enter payee details, amounts, and print checks directly from the app.",
      technologies: ["ReactJS", ".Net", "postgreSQL"],
      image: Supplies,
    },
    {
      title: "Report Viewer",
      description:
        "I and my team developed a report viewer application which was migrated from SSRS to ReactJS. It allows users to view and interact with reports generated from various data sources.",
      technologies: ["ReactJS", "Java", "Spring Boot", "PostgreSQL"],
      image: Report,
    },
    {
      title: "Coupon Management System",
      description:
        "A web application for managing coupon codes and discounts. Users can create, edit, and track the usage of coupons. This also notifies users about the new coupons requested by the admin.",
      technologies: ["ReactJS", "Java", "Spring Boot", "PostgreSQL"],
      image: Coupon,
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, and experience as a web developer.",
      technologies: ["ReactJS", "HTML", "CSS", "JavaScript"],
      image: Porfolio,
      git: "https://github.com/Ankanmtr7/Portfolio",
      link: "https://cheerful-rabanadas-ad512a.netlify.app/",
    },
  ];
  const options = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "20rem",
    focus: "center",
    autoWidth: true,
    width: "100rem",
    autoplay: true,
    pauseOnHover: true,
  };
  return (
    <>
      <h1 className="heading-title">My Project</h1>
      <Splide
        options={options}
        className="padding-20-200px"
        aria-label="React Splide Example"
      >
        {ProjectDetails.map((project, index) => (
          <SplideSlide key={index} className="padding-top-bottom-20px">
            <div class="card projectCard" data-bs-theme="dark">
              <img src={project.image} alt={`Image ${index + 1}`} loading="lazy"/>
              <div class="card-body">
                <h5 class="card-title">{project.title}</h5>
                <p class="card-text">{project.description}</p>
                <p class="card-text">
                  Technologies used: {project.technologies.join(", ")}
                </p>
                {project.git && (
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline-warning me-5 mt-4"
                  >
                    GitHub Repository
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline-light mt-4"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default MyProject;
