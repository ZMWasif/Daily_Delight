import React from "react";
import foodHero from "../../../assets/food_hero.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => (
  <div
    className="bg-[url('/src/assets/header_bg.jpg')] app__wrapper section__padding"
    id="home"
  >
    <div className="app__wrapper_info">
      {/* <SubHeading title="Chase the new flavour" /> */}
      <h1 className="app__header-h1">A Fusion of Flavors and Ambiance</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Immerse yourself in a symphony of culinary excellence where diverse
        ingredients harmonize, crafting exquisite dishes that transport you to a
        world of tasteful delights and captivating ambiance.{" "}
      </p>
      <Button as={Link} to="/menu" type="button" className="custom__button">
        Explore Menu
      </Button>
    </div>

    <div className="app__wrapper_img">
      <img src={foodHero} alt="header_img" />
    </div>
  </div>
);

export default Header;

/* import React from "react";
import foodHero from "../../../assets/food_hero.jpg";

const Header = () => {
  return (
    <div className="text-white">
      <div className="hero min-h-screen bg-base-200 bg-[url('/src/assets/plate_bg.jpg')]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={foodHero} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
 */
