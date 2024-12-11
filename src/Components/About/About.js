import React from "react";
import "../About/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-body">
      <div className="blurred-container">
        <div className="about-content">
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            assumenda iure eum labore delectus doloremque, animi inventore nulla
            quidem quod.
          </p>
          <Link className="homebutton" to="/resume_AS">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
