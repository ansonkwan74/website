import React from "react";
import Introduction from "./introduction";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/stylesheet.css";

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col lg={11}>
          <Row className="min-height-100vh">
            <Introduction />
          </Row>
          <Row>
            <About />
          </Row>
          <Row>
            <Projects />
          </Row>
          <Row>
            <Contact />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
