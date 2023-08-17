import React from "react";
import Header from "./header/Header";
import AboutUs from "./AboutUs/AboutUs";
import SpecialMenu from "./SpecialMenu/SpecialMenu";
import Chef from "./Chef/Chef";
import Intro from "./Intro/Intro";
import FindUs from "./FindUs/FindUs";
import Newsletter from "../Shared/Newsletter";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AboutUs></AboutUs>
      <Chef></Chef>
      <Intro></Intro>
      <FindUs></FindUs>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
