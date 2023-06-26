import React, { useEffect, useState } from "react";

const Ourservices = () => {
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
    <div className="py-32 flex flex-col-reverse lg:flex-row-reverse items-start  justify-between px-6 lg:px-28">
      <div className="w-auto font-nunito lg:w-full pt-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="multiverse-text py-5 text-2xl w-[70%] 2xl:w-[60%] font-bold ">
          A full-service integrated digital solutions agency, empowering brands
          to thrive in the digital age
        </p>
        <p
          className={`font-medium text-xl w-[84.5%] 2xl:w-[75%] ${
            isScrolled ? "text-white" : "text-[#000]"
          }`}
        >
          We believe that your brands deserve the best and our range of services
          is designed to bring your digital presence to life. From comprehensive
          brand strategies to impactful content marketing, seamless e-commerce
          solutions to stunning design, data-driven performance marketing to
          optimized websites and SEO - we've got you covered.
        </p>
      </div>
    </div>
  );
};

export default Ourservices;
