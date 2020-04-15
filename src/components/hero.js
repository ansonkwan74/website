import React from "react";
import Introduction from "./introduction";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Nav from "./nav";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col lg={10}>
          <Row>
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
        <Col lg={2}>
          <Nav />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
