import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const about = () => {
  return (
    <Container>
      <Col>
        <Row className="aboutTitle">
          <span className="red-highlight">00 </span> &nbsp;More on Me
        </Row>
        <Row className="divider"></Row>
        <Row className="margin-top-50px">
          <Col lg={7} md={12}>
            <Row className="aboutText">
              <p>
                Glad you made it this far! My name is Anson Kwan and I am based
                in Auckland, New Zealand. Currently I am a second year Software
                Engineering student at{" "}
                <span className="uoa-highlight">
                  The University of Auckland{" "}
                </span>
                . I also spent a year abroad at{" "}
                <span className="usyd-highlight">The University of Sydney</span>{" "}
                as a Dalyell Scholar in 2019.
                <br></br>
                <br></br>
                Upon returning to Auckland, I rediscovered my passion for web
                development. Now I spend my free time learning to develop web
                applications, chasing efficiency and perfection in the process.
                <br></br>
                <br></br>I am constantly in search of a meaningful avenue to
                express my skills.
              </p>
            </Row>
            <Row className="aboutText">
              <p className="white">
                <br></br>
                <span className="red-highlight">></span> JavaScript
                <br></br>
                <span className="red-highlight">></span> HTML & CSS
                <br></br>
                <span className="red-highlight">></span> React
                <br></br>
                <span className="red-highlight">></span> Python
                <br></br>
                <span className="red-highlight">></span> Java
                <br></br>
                <span className="red-highlight">></span> C
              </p>
            </Row>
          </Col>
          <Col lg={5} md={12}>
            <Image
              src="https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/207824_191901960851309_7565798_n.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=PVWbleXuRUoAX9rxIz8&_nc_ht=scontent.fakl2-1.fna&oh=7d4e975f9f449bb7e49c95a9255f045c&oe=5EBE0905"
              thumbnail
            />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default about;
