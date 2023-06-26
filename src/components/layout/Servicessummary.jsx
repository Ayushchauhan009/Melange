import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  arrow,
  image6,
  collage,
} from "../../assets/images";

const Servicessummary = ({ handleLinkHover }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const linksData = [
    { id: 0, label: "Brand Strategy", imageSrc: image1 },
    { id: 1, label: "Content Marketing", imageSrc: image2 },
    { id: 2, label: "E-commerce Management", imageSrc: image3 },
    { id: 3, label: "Design Solutions", imageSrc: image4 },
    { id: 4, label: "Performance Marketing", imageSrc: image5 },
    { id: 5, label: "Website Development", imageSrc: image6 },
  ];

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
    handleLinkHover(linksData[index].imageSrc);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
    handleLinkHover("../../assets/images/image1.jpg");
  };

  return (
    <div className="py-4 px-4">
      <div className="text-[white] font-nunito z-30 absolute pt-6">
        <h1 className="text-3xl md:text-4xl font-bold md:mb-2 ">What We Do</h1>
        <p className="font-light text-base md:text-lg z-30">
          Just like a multiverse where different worlds collide and create
          something extraordinary.
        </p>
        <p className="font-light text-base md:text-lg z-50">
          Melange brings the diverse realms of marketing to create something
          bigger and better for your brands.
        </p>
      </div>
      <div className="flex flex-col mt-44 md:mt-32  expand-link">
        {hoveredIndex !== null && (
          <motion.img
            src={linksData[hoveredIndex].imageSrc}
            alt={`Image ${hoveredIndex + 1}`}
            className="w-full absolute sm:w-full h-auto sm:h-full z-0 md:mt-0 right-0 xxs:top-[1650px] lg:top-[1360px]  2xl:top-[1609px] 3xl:top-[1700px]  transition-all ease-in-out duration-100"
            style={{
              opacity: hoveredIndex !== null ? 1 : 0,
              translateY: hoveredIndex !== null ? 0 : -100,
              transformOrigin: "top",
            }}
            initial={{ opacity: 1, translateY: 0 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>

      <div className="flex flex-col md:flex-row">
        <ul className="md:mr-8 z-0">
          {linksData.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:font-bold hover:text-2xl my-10 text-[#686868] font-bold text-lg md:text-lg expand-link"
              onMouseOver={() => handleMouseOver(link.id)}
              onMouseOut={handleMouseOut}
            >
              <span
                className={`flex items-center ${
                  hoveredIndex === link.id ? "text-[#000] " : "text-[#686868]"
                }`}
              >
                {link.label}
                {hoveredIndex === link.id && (
                  <>
                    <img
                      src={arrow}
                      alt="Arrow"
                      className="relative top-3 -right-8 transform filter brightness-0 hue-rotate-270 -translate-y-1/2 expand-link"
                      style={{ width: "40px", height: "20px" }}
                    />
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
        <div className="w-[30%] md:-mt-44 lg:-mt-0 md:ml-8 z-0 right-0 md:static">
          <video
            src=""
            autoPlay
            loop
            muted
            className="w-64 h-64"
            type="video/gif"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Servicessummary;
