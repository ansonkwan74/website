import React from "react";
import "../styles/stylesheet.css";

const nav = () => {
  return (
    <div className="navWrapper margin-top-27vh">
      <button className="navButton">Anson Kwan</button>
      <button className="navButton">About Me</button>
      <button className="navButton">My Projects</button>
      <button className="navButton">Contact Me</button>
      <button className="navButton">CV</button>
    </div>
  );
};

export default nav;
