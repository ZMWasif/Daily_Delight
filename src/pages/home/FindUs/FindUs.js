import React from "react";
import findUs from "../../../assets/findus.jpg";
import { images } from "../../../constants";
import { Button } from "react-bootstrap";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Holländische Straße 103, 34127 Kassel, Germany
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <Button type="button" className="menu-btn" style={{ marginTop: "2rem" }}>
        Visit Us
      </Button>
    </div>

    <div className="app__wrapper_img">
      <img src={findUs} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
