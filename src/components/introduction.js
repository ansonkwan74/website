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
            I am a second year Software Engineering student at The University of
            Auckland, and a web development enthusiast. Currently spending time
            on sharpening my data structure and algorithms knowledge.
          </p>
        </div>
        <div className="introButtonContainer">
          <button className="introButton">Wanna Chat?</button>
          <button className="introButton">CV</button>
        </div>
      </div>
    </div>
  );
};

export default introduction;
