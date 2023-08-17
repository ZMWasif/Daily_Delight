import React from "react";

import { images } from "../../../constants";
import chef from "../../../assets/chef.jpg";
import "./Chef.css";

const Chef = () => (
  <div className="app__wrapper section__padding bg-[url('/src/assets/header_bg.jpg')]">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            At our core, we believe in crafting experiences that
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          transcend the plate. We're committed to celebrating diverse flavors,
          supporting local communities, and fostering connections, all while
          creating memorable moments that linger long after the mealLorem ipsum
          dolor sit amet, consectetur adipiscing elit auctor sit.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
