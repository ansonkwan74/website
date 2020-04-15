import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const introduction = () => {
  return (
    <Container>
      <Row>
        <Col className="margin-left-15">
          <Row className="introTitle margin-top-intro">The name is</Row>
          <Row className="introName">Anson Kwan.</Row>
          <Row className="introDescription">I like coding things.</Row>
        </Col>
      </Row>
      <Row lg={2} sm={1} md={1} xs={1}>
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

export default introduction;
