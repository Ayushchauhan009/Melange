import React, { useState, useEffect } from "react";
// import { ExploreButton } from ".";
import { Link } from "react-router-dom";
import { labels } from "../../constants";
import { servicearrow } from "../../assets/images";
// import { useInView } from "react-intersection-observer";

const Labels = ({ title, description, links, textColor }) => {
  return (
    <div className="my-10 lg:my-24 text-white">
      <div className="flex flex-col lg:flex-row  justify-between items-center">
        <h1
          className={`text-bg font-bold text-3xl label-heading lg:text-3xl mb-3 flex cursor-pointer items-center border-none lg:mb-3 ${textColor}`}
        >
          <Link>{title}</Link>
          <span className="border-2 ml-3 p-2 rounded-[50px] hover:border-[#5556ff] ">
            <img
              src={servicearrow}
              alt=""
              className=" w-2 h-2 service-arrow  "
            />
          </span>
        </h1>
      </div>
      <div>
        <p className={`text-base lg:text-xl text-white mb-8 ${textColor}`}>
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 text-white font-extrabold">
        {Object.values(links).map((link, index) => (
          <p
            key={index}
            className={`${textColor} text-white flex text-[18px] w-auto items-center `}
          >
            <a href="#" className="label-text">
              {link}
            </a>
            <span className="cursor-pointer hover:ml-3">
              <img
                src={servicearrow}
                alt=""
                className="ml-3 w-3 h-3 fill service-arrow"
              />
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

const ServiceLabeling = ({ textColor, inView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the scroll position threshold as needed
      const scrollThreshold = 30; // Change this value to determine when the color change occurs

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`font-nunito px-6 pb-14 lg:px-28 transition-opacity duration-1000`}
      style={{ opacity: inView ? 1 : 0 }} // Set opacity based on inView status
    >
      <h1
        className={`font-bold text-3xl lg:text-4xl ${
          isScrolled ? "text-white" : "text-[#000]"
        }`}
      >
        Your very own Marketing Multiverse
      </h1>
      <div className="space-y-28">
        {labels.map((label, index) => {
          return <Labels key={index} {...label} textColor={textColor} />;
        })}
      </div>
    </div>
  );
};

export default ServiceLabeling;
