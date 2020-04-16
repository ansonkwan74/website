import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/project.css";

const projects = () => {
  return (
    <Container>
      <Row>
        <Col lg={7} className="red">
          <img
            className="projectImage"
            src="https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/36585535_10213408690071893_5510323120986128384_n.jpg?_nc_cat=107&_nc_sid=ad2b24&_nc_ohc=ifkpziJbYCgAX8zsOM6&_nc_ht=scontent.fakl2-1.fna&oh=13ec3c74c0f6d522ab93a91fabf8fee2&oe=5EBC9D0F"
          />
        </Col>
        <Col lg={5} className="green">
          <Row className="projectTitle red">project title</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default projects;
