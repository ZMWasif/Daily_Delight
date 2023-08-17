import React from "react";
import divider from "../../../src/assets/divider.png";
const PizzaMenu = () => {
  return (
    <div className="bg-[url('/src/assets/header_bg.jpg')] sticky top-0">
      <div className="text-center flex flex-col flex__center">
        <div>
          <h1 className="headtext__cormorant">Delicious Pizzas</h1>
          <div className="flex__center">
            <img className="flex__center" src={divider} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaMenu;
