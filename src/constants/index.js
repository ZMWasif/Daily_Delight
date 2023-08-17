import images from "../constants/images";
import meal from "../assets/meal.mp4";
import data from "../constants/images";

import { pizza, burger, steak, desserts } from "../assets";

const services = [
  {
    title: "Pizza",
    image: pizza,
    price: "$15",
  },
  {
    title: "Burger",
    image: burger,
    price: "$12",
  },
  {
    title: "Steak",
    image: steak,
    price: "$25",
  },
  {
    title: "Desserts",
    image: desserts,
    price: "$10",
  },
];

export { services, images, meal, data };
