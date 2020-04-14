import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const introduction = () => {
  return (
    <Container>
      <Col>
        <Row>
          <p className="introTitle">The name is</p>
        </Row>
        <Row>
          <p className="introName">Anson Kwan.</p>
        </Row>
        <Row>
          <p className="introDescription">I like coding things.</p>
        </Row>
        <Row>
          <p className="introText">
            A web development enthusiast, explorer of frameworks and design.
            Believer of JavaScript being a real programming language. Currently
            spending time on sharpening my data structures and algorithms
            knowledge.
          </p>
          <div className="introButtonContainer">
            <button className="introButton">Wanna Chat?</button>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default introduction;
