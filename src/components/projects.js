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
            src="https://images.unsplash.com/photo-1556924784-f02bd5b5b094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
        </Col>
      </Row>
      <Row className="projectInfoContainer">
        <Col xs={{ span: 6, offset: 6 }} className="projectInfoWrap">
          <Row className="projectTitle ">Project Title</Row>
          <Row className="projectDescription ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </Row>
          <Row className="projectTech ">React JavaScript HTML CSS Firebase</Row>
          <Row className="projectLinks ">tech</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default projects;
