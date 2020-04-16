import React, { Component } from "react";

class Nav extends Component {
  state = {
    scrollDirection: "none",
    open: true,
    mount: false,
    deltaY: 0,
  };

  render() {
    return (
      <div className="navWrapper margin-top-27vh">
        <button className="navButton">Anson Kwan</button>
        <button className="navButton">About Me</button>
        <button className="navButton">My Projects</button>
        <button className="navButton">Contact Me</button>
        <button className="navButton">CV</button>
      </div>
    );
  }
}

export default Nav;
