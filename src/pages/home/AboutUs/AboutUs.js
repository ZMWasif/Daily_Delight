import React from "react";
import DD from "../../../assets/dd-logo-11550724751eajud0bkbc-removebg-preview.png";
import { images } from "../../../constants";
import "./AboutUs.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={DD} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          We are a culinary destination dedicated to unforgettable experiences.
          Our chefs blend passion with creativity to deliver exceptional dishes,
          while our inviting ambiance ensures every visit is a cherished memory.
        </p>
        <Button as={Link} to="/about" type="button" className="menu-btn">
          Know More
        </Button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Rooted in tradition, we began humbly as a family-owned eatery. Over
          the years, our passion for flavor and hospitality evolved, shaping us
          into a beloved culinary destination, cherished by generations.
        </p>
        <Button as={Link} to="/history" type="button" className="menu-btn">
          Know More
        </Button>
      </div>
    </div>
  </div>
);

export default AboutUs;
