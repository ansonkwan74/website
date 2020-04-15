import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const about = () => {
  return (
    <Container className="margin-top-27vh">
      <Col>
        <Row className="aboutTitle">More on Me</Row>
        <Row>
          <Col lg={7} md={12}>
            <Row className="aboutText">
              Glad you made it this far! My name is Anson Kwan and I am based in
              Auckland, New Zealand. Currently I am a second year Software
              Engineering student at The University of Auckland. I also spent a
              year abroad at The University of Sydney as a Dalyell Scholar in
              2019.
              <br></br>
              <br></br>
              Upon returning to Auckland, I rediscovered my passion for web
              development. Now I spend my free time learning to develop web
              applications, chasing efficiency and perfection in the process.
              <br></br>
              <br></br>I am constantly in search of a meaningful avenue to
              express my skills.
            </Row>
            <Row className="aboutText">
              <br></br>> JavaScript
              <br></br>> HTML & CSS
              <br></br>> React
              <br></br>> Python
              <br></br>> Java
              <br></br>> C
            </Row>
          </Col>
          <Col md={5} md={5}>
            <button></button>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default about;
