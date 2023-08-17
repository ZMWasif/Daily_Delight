import React from "react";
import "./Menu.css";
import divider from "../../../src/assets/divider.png";
import { Button } from "react-bootstrap";
import MenuItem from "../home/MenuItem/MenuItem";
const Menu = () => {
  return (
    <div className="bg-[url('/src/assets/header_bg.jpg')] sticky top-0">
      <div className="text-center flex flex-col flex__center">
        <div className="text-3xl text-yellow-300">Our Food Menu</div>
        <div>
          <h1 className="text-7xl font-bold text-white">Let's Check Menus</h1>
          <div className="flex__center">
            <img className="flex__center" src={divider} alt="" />
          </div>
        </div>
      </div>
      <div className="flex__center">
        <Button className="menu-btn">Happy Hour Food</Button>
        <Button className="menu-btn">Desserts Menu</Button>
        <Button className="menu-btn">Kids Menu</Button>
        <Button className="menu-btn">Pizza Menu</Button>
      </div>
      <div>
        <MenuItem></MenuItem>
      </div>
    </div>
  );
};

export default Menu;
