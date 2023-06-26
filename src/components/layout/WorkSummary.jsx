import React, { useState } from "react";
import { motion } from "framer-motion";
import { works } from "../../constants";
import { Link } from "react-router-dom";

const Work = ({ icon, tag1, tag2, tag3, title, description, path }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="work cursor-pointer relative"
      initial={{ opacity: 1, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={path} className="work">
        <div
          className={`overlay ${isHovered ? "active" : ""} w-full 2xl:w-full`}
        ></div>
        <motion.img
          src={icon}
          alt=""
          className="w-full h-auto 2xl:w-[90%] 2xl:h-[80%] transition-all duration-300 transform-gpu "
          style={{
            scale: isHovered ? 1 : 1,
          }}
        />
      </Link>
      <div className="flex py-1 multiverse-text font-semibold mt-0">
        <p>{tag1}</p>
        <p className="mx-5">{tag2}</p>
        <p>{tag3}</p>
      </div>
      <Link to={path} className="cursor-pointer">
        <motion.h1
          className="font-bold text-2xl sm:text-3xl"
          style={{ color: isHovered ? "#5556ff" : "black" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-[#1a1a1a] text-base w-auto 2xl:w-[90%] sm:text-md font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      </Link>
    </motion.div>
  );
};

const WorkSummary = () => {
  return (
    <div className="font-nunito px-8 sm:px-16 lg:px-28 ">
      <div className="py-8 sm:py-20">
        <h1 className="font-bold text-2xl sm:text-4xl">Our Work</h1>
        <p className="font-medium text-base sm:text-lg pl-1 mt-2">
          We are on a mission to help start-ups and emerging brands thrive in
          the ever-changing digital eco-system.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-24 2xl:gap-x-36 gap-y-32 xl:gap-y-64 2xl:gap-y-56 lg:pr-6">
        {works.map((work, index) => (
          <div
            key={index}
            className={`col-span-1 ${
              index % 2 === 0 ? "sm:h-[700px]" : "sm:h-[500px]"
            }`}
          >
            <motion.div
              className={index % 2 === 0 ? "odd" : "even"}
              initial={{ opacity: 1, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Work key={`work-${index}`} {...work} path={work.path} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSummary;
