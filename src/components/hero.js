import React from "react";
import Introduction from "./introduction";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Nav from "./nav";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="heroWrapper">
      <Nav />
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Hero;
