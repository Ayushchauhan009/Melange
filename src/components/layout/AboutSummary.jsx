import React, { useState, useEffect } from "react";
import ContactButton from "./ContactButton";
import { melangeAbout } from "../../assets/images";
import { motion } from "framer-motion";

const AboutSummary = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("my-component");
      if (element) {
        const { bottom } = element.getBoundingClientRect();
        const isInViewport = bottom <= window.innerHeight;
        setIsVisible(isInViewport);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variant1 = {
    hidden: { opacity: 0, x: "-50%" },
    visible: { opacity: 1, x: 0.5 },
  };
  const variant2 = {
    hidden: { opacity: 0, x: "50%" },
    visible: { opacity: 1, x: 0.5 },
  };

  return (
    <div id="my-component">
      <motion.div
        initial={{ opacity: 0.5, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0.5, y: isVisible ? 10 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center py-10 md:py-16 px-4 md:px-6">
          <motion.div
            className="w-full md:w-1/2 p-4 md:p-16 animate-slide"
            initial="hidden"
            animate="visible"
            variants={variant1}
            transition={{ duration: 0.4 }}
          >
            <img src={melangeAbout} alt="" className="animated-svg w-full" />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={variant2}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h1 className="multiverse-text text-3xl md:text-4xl pl-1 font-nunito font-extrabold">
                Your Marketing Multiverse
              </h1>
              <p className="font-bold font-nunito mt-1 pl-2">
                The many worlds of marketing, under one roof!
              </p>
            </div>
            <p className="pt-3 pl-2 font-nunito font-semibold text-[#0f0330]">
              We believe that marketing extends beyond just crafting the right
              message, developing artistic creatives, or analysing data. It's
              about integrating these elements with a{" "}
              <b>well-defined strategy & structure</b>, to build a{" "}
              <b>cohesive brand experience</b>.
            </p>
            <p className="pt-3 pl-2 font-nunito font-semibold text-[#0f0330]">
              With us, you have your very own marketing multiverse, serving as
              your <b>dedicated in-house marketing team</b>.
            </p>
            <div className="pt-3">
              <ContactButton />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSummary;
