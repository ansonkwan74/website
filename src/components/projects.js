import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/project.css";

const projects = () => {
  return (
    <Container>
      <Row className="projectImageContainer">
        <Col md={7} className=" ">
          <img
            className="projectImage"
            alt="placeholder"
            src="https://images.unsplash.com/photo-1566849571098-b2e9eeaee53f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
        </Col>
      </Row>
      <Row className="projectInfoContainer">
        <Col xs={{ span: 7, offset: 5 }} className="">
          <Row className="projectTitle">
            <p>
              <span className="red-highlight">01</span> Project Title
            </p>
          </Row>
          <Row>
            <p className="projectDescription colour2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Row>
          <Row className="projectTech ">React JavaScript HTML CSS Firebase</Row>
          <Row className="projectLinks ">tech</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default projects;
