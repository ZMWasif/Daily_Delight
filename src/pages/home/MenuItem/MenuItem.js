import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../../styles";
import { services } from "../../../constants";
import { SectionWrapper } from "../../../hoc";
import { fadeIn, textVariant } from "../../../utils/motion";
import { Button } from "react-bootstrap";

const ServiceCard = ({ index, title, image, price }) => (
  <Tilt className="xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] bg-slate-900 rounded-[20px] shadow-card "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="rounded-[20px] py-4 px-10 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={image}
          alt="web-development"
          className="w-40 h-full object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <h4 className="text-white text-[20px] text-center">{price}</h4>
        <Button className="text-white text-[20px] font-bold text-center menu-btn">
          Order Now
        </Button>
      </div>
    </motion.div>
  </Tilt>
);

const MenuItem = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className="headtext__cormorant">
          Tasty Lunches. Romantic Dinners. Enjoy!
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] p__opensans pr-8"
        style={{ margin: "2rem 0" }}
      >
        Indulge in delectable lunches, savor intimate romantic dinners, and
        relish memorable moments while dining at our restaurant. Discover
        flavorful culinary creations that elevate your dining experience,
        whether it's a delightful midday meal or a cozy evening for two. Unwind,
        celebrate, and create lasting memories in a charming ambiance that
        invites you to enjoy every bite and cherish special occasions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(MenuItem, "menuItem");
