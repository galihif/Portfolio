import React, { useState, useEffect, useCallback  } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../../config/firebase'

import taskmaster from "../../Assets/Projects/taskmaster.png";
import meraihMimpi from "../../Assets/Projects/meraih-mimpi.png";
import mbolang from "../../Assets/Projects/mbolang.png";
import covid from "../../Assets/Projects/covid.png";
import galgadut from "../../Assets/Projects/galgadut.png";

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    getProjects()
  },[])
  
  const getProjects = ()=>{
    setLoading(true)
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(doc.data())
      });
      setProjects(items)
      setLoading(false)
    })
  }

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
        {
          isLoading ? null : (
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {
                projects.map((project) => {
                  return(
                    <Col md={4} className="project-card">
                      <ProjectCard
                        imgPath={project.image}
                        isBlog={false}
                        title={project.name}
                        description={project.desc}
                        link={project.link}
                      />
                    </Col>
                  )
                })
              }
            </Row>
          )
        }
      </Container>
    </Container>
  );
}

export default Projects;
