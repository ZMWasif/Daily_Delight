import React, { useEffect, useState } from "react";
import "./FoodMenus.css";
import { motion } from "framer-motion";
import FoodMenu from "../FoodMenu/FoodMenu";

const FoodMenus = () => {
  const [foods, setfoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foodMenu")
      .then((res) => res.json())
      .then((data) => setfoods(data));
  }, []);
  return (
    <div className="foods-title">
      <motion.h1 animate={{ x: 20 }}> Stunning foods </motion.h1>

      <div className="foods-container">
        {foods.map((food) => (
          <FoodMenu key={food._id} food={food}></FoodMenu>
        ))}
      </div>
    </div>
  );
};

export default FoodMenus;
