import React, { useState } from "react";
import { motion } from "framer-motion";
import { workpage } from "../../constants";

const Work = ({ icon, tag1, tag2, tag3, title, description }) => {
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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="work">
        <div className={`overlay ${isHovered ? "active" : ""}`}></div>
        <motion.img
          src={icon}
          alt=""
          className="w-full h-auto transition-all duration-300 transform-gpu"
          style={{
            scale: isHovered ? 1 : 1,
          }}
        />
      </div>
      <div className="flex py-1 text-[#5556ff] font-semibold mt-0">
        <p>{tag1}</p>
        <p className="mx-5">{tag2}</p>
        <p>{tag3}</p>
      </div>
      <div className="cursor-pointer">
        <motion.h1
          className="font-bold text-2xl sm:text-3xl"
          style={{ color: isHovered ? "#5556ff" : "black" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-[#1a1a1a] text-base sm:text-md font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const WorkSummary = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Work");

  // Handler for selecting a filter
  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  // Get the unique list of tags for the filter options
  const tags = [
    "All Work",
    "Brand Strategy",
    "Content Marketing",
    "Design Solutions",
    "Performance Marketing",
    "Website Development",
    "E-Commerce",
  ];

  // Filter the works based on the selected filter
  const filteredWorks =
    selectedFilter === "All Work"
      ? workpage
      : workpage.filter(
          (work) =>
            work.tag1 === selectedFilter ||
            work.tag2 === selectedFilter ||
            work.tag3 === selectedFilter
        );

  return (
    <div className="font-nunito px-8 sm:px-16 lg:px-28 mb-16 lg:py-16">
      <div className="py-8 sm:py-16">
        <h1 className="font-bold text-2xl sm:text-5xl">Our Work</h1>
        <p className="font-medium text-base sm:text-2xl mt-3 ml-1">
          Explore our diverse range of projects, each a testament to our
          commitment and expertise in delivering holistic digital solutions for
          our clients.
        </p>
      </div>
      <div className="mb-8">
        <div className="flex space-x-4">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`py-2 px-2 text-[14px] font-bold rounded-[50px] border ${
                selectedFilter === tag
                  ? "submit-bg border-none text-white"
                  : "multiverse-text border-[#5556ff]"
              }`}
              onClick={() => handleFilterSelect(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-36 gap-y-32">
        {filteredWorks.map((work, index) => (
          <div
            key={index}
            className={`col-span-1 ${
              index % 2 === 0 ? "sm:h-[700px]" : "sm:h-[500px]"
            }`}
          >
            <Work key={`work-${index}`} {...work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSummary;
