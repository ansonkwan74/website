import React from "react";

const introduction = () => {
  return (
    <div className="sectionWrapper">
      <div className="introTitle">The name is</div>
      <div className="introName">Anson Kwan.</div>
      <div className="introDescription">I like complicated things.</div>
      <div className="introInformationContainer">
        <div className="introText">
          <p>
            A web development enthusiast, explorer of frameworks and design.
            Believer of JavaScript being a real programming language. Currently
            spending time on sharpening my data structures and algorithms
            knowledge.
          </p>
        </div>
        <div className="introButtonContainer">
          <button className="introButton">Wanna Chat?</button>
        </div>
      </div>
    </div>
  );
};

export default introduction;
