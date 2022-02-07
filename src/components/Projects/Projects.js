import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import taskmaster from "../../Assets/Projects/taskmaster.png";
import meraihMimpi from "../../Assets/Projects/meraih-mimpi.png";
import mbolang from "../../Assets/Projects/mbolang.png";
import covid from "../../Assets/Projects/covid.png";
import galgadut from "../../Assets/Projects/galgadut.png";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmaster}
              isBlog={false}
              title="Meraih Mimpi Android App"
              description="This is the Meraih Mimpi Mobile App. This is an android application to record every dream that we will achieve. With this application, it will easier to find out the dreams that we will achieve soon."
              link="https://s.id/MeraihMimpiRepo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meraihMimpi}
              isBlog={false}
              title="Meraih Mimpi Android App"
              description="This is the Meraih Mimpi Mobile App. This is an android application to record every dream that we will achieve. With this application, it will easier to find out the dreams that we will achieve soon."
              link="https://s.id/MeraihMimpiRepo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mbolang}
              isBlog={false}
              title="Mbolang Web Design"
              description="This is Mbolang Web Design. Mbolang is a travel guide website that provides information and guides about a destination. You can review a destination or write a guide that can help other travelers."
              link="https://s.id/MbolangProto"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Cov-ID Mobile App"
              description="This is the Cov-ID Mobile App. This application showing the data of covid 19 cases in Indonesia and in the Indonesian province. I used the public API provided by kawalcovid19.id."
              link="https://galihif.github.io/covid-app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={galgadut}
              isBlog={false}
              title="Galgadut Portfolio Web"
              description="This is the Galgadut portfolio website. I create this project while I am learning front-end web development in @sandhikagalih 's youtube channel. In his video, he taught me to make a personal portfolio website using CSS framework materialize"
              link="https://galihif.github.io/galgadut"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
