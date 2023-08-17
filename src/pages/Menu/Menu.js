import React from "react";
import "./Menu.css";
import divider from "../../../src/assets/divider.png";
import { Button } from "react-bootstrap";
import MenuItem from "../home/MenuItem/MenuItem";
import Testimonial from "./Testimonials";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="bg-[url('/src/assets/header_bg.jpg')] sticky top-0">
      <div className="text-center flex flex-col flex__center">
        <div className="text-3xl text-white mt-5">Our Food Menu</div>
        <div>
          <h1 className="headtext__cormorant">Let's Check Menus</h1>
          <div className="flex__center">
            <img className="flex__center" src={divider} alt="" />
          </div>
        </div>
      </div>
      <div className="flex__center grid grid-cols-1 lg:grid-cols-3 gap-3">
        <Button as={Link} to="/happyfood" className="menu-btn">
          Happy Hour Food
        </Button>
        <Button as={Link} to="/desserts" className="menu-btn">
          Desserts Menu
        </Button>
        <Button as={Link} to="/kidsmenu" className="menu-btn">
          Kids Menu
        </Button>
        <Button as={Link} to="/pizzas" className="menu-btn">
          Pizza Menu
        </Button>
      </div>
      <div>
        <MenuItem></MenuItem>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Menu;
