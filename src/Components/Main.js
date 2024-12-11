import React from "react";
import "../Components/maink.css";
import Navbar from "./Navbar/Navbar";
import Image from "./assets/images/meow.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="mainbody">
      <div className="blurred-container">
        <Navbar />
        <section className="hero">
          <div className="hero-text">
            <h1>Hi, I am Mohammed Siraj Siddique</h1>
            <h2>NetSuite Administrator | Functional Consultant</h2>
            <p className="description">
              Analytical, organized and detail-oriented with support to all our
              internal and external customers and adhere to achieving business
              targets withthe help of relevant tools along with business
              compliance and control components. Expertise in modern ERP
              software like NetSuite which manages core business functions
              including finance and accounting, inventory, orders and more.
            </p>
            <Link className="see-work" to="/Work">
              See My Work
            </Link>
          </div>
          <div className="hero-image">
            <img
              className="heroimg"
              src={Image}
              alt="Illustration of a Developer"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
