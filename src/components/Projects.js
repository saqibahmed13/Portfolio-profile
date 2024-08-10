import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img7.jpg";
import projImg4 from "../assets/img/project-img8.jpg";
import projImg5 from "../assets/img/project-img9.jpg";
import projImg6 from "../assets/img/project-img10.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "BookAppStore",
      description:
        "Developed BookAppStore using MERN Stack,featuring signup and login functionalities and proper authentication.",
      imgUrl: projImg1,
    },
    {
      title: "Movie Review",
      description:
        "Developed a dynamic movie-review application using React JS for the frontend, providing users with an interactive platform to watch movie trailers and submit reviews seamlessly, with dark and light mode options",
      imgUrl: projImg2,
    },
    {
      title: "E-commerce",
      description:
        " Developed a fully responsive full stack e-commerce application using React, MongoDB, Node.js, and Express.js, delivering a seamless and scalable shopping experience across all devices",
      imgUrl: projImg3,
    },
    {
      title: "Top Courses",
      description:
        "Developed a fully responsive Top Courses web application using React JS, enabling users to filter courses based on specific requirements.",
      imgUrl: projImg4,
    },
    {
      title: "Weather App",
      description:
        "Developed a weather app using React.js, seamlessly integrating it with an API to provide real-time weather updates.",
      imgUrl: projImg5,
    },
    {
      title: "Currency Converter",
      description:
        "Developed a currency converter using vanilla JavaScript, integrated with an API to provide accurate and real-time exchange rates.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    "As a web developer, I focus on building user-friendly,
                    responsive websites that are both functional and visually
                    appealing, ensuring an engaging and satisfying experience
                    for every user."
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          "Thank you for visiting my portfolio! Feel free to
                          connect with me if you’re looking for a skilled web
                          developer for exciting projects or roles. I’m always
                          open to new opportunities and collaborations!"
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          "Thank you for visiting my portfolio! Feel free to
                          connect with me if you’re looking for a skilled web
                          developer for exciting projects or roles. I’m always
                          open to new opportunities and collaborations!" .
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
