import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textutils from "../../Assets/Projects/textutils.png";
import food from "../../Assets/Projects/Food.png";

function Projects() {
  useEffect(() => {
    document.title = "Harshil | Projects"
  }, [])
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Text changer"
              description="TextUtils is a React web application built using HTML, CSS, JavaScript, and Bootstrap. It serves as a versatile tool for text manipulation, offering features such as converting text to uppercase or lowercase, copying text to the clipboard, and removing extra spaces. The app's intuitive interface and comprehensive functionalities make it a valuable resource for users seeking efficient text processing solutions."
              ghLink="https://github.com/harshil8761/TEXTUTILS"
              demoLink="https://textutils-delta-dusky.vercel.app/"
            />
          </Col>
           <Col md={5} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Foodie Web"
              description="Food is a React web application built using HTML, CSS, JavaScript.The Food Ordering App is a sleek, modern, and responsive web application built using React.js,This project is perfect for anyone looking to launch a food ordering platform or learn advanced React.js development with a real-world application."
              ghLink="https://github.com/harshil8761/Food"
              demoLink="https://food-lilac-ten.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
