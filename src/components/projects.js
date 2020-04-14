import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row className="introTitle" p={0}>
            The name is
          </Row>
          <Row className="introName" p={0}>
            Anson Kwan.
          </Row>
          <Row className="introDescription" p={0}>
            I like coding things.
          </Row>
        </Col>
      </Row>
      <Row lg={2} sm={1}>
        <Col className="introText">
          A web development enthusiast, explorer of frameworks and design.
          Believer of JavaScript being a real programming language. Currently
          spending time on sharpening my data structures and algorithms
          knowledge.
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col className="introButtonContainer">
          <button className="introButton">Wanna Chat?</button>
        </Col>
      </Row>
    </Container>
  );
};

export default projects;
