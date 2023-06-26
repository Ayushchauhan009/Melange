import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Navbar, Ourservices, ServiceLabeling, Footer } from "../layout";

const Services = () => {
  const [activeSection, setActiveSection] = useState("");
  const [serviceLabelingRef, serviceLabelingInView] = useInView();

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + 600;

      if (currentPosition < window.innerHeight) {
        setActiveSection("section1");
      } else if (
        currentPosition >= window.innerHeight &&
        currentPosition < 4.9 * window.innerHeight
      ) {
        setActiveSection("section2");
      } else if (
        currentPosition >= 2 * window.innerHeight &&
        currentPosition < 3 * window.innerHeight
      ) {
        setActiveSection("section3");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    scroll.scrollTo(section, {
      duration: 3000,
      smooth: "easeInOutQuart",
      offset: 100,
    });
  };

  return (
    <div className={activeSection === "section2" ? "service-page" : ""}>
      <Navbar />
      <div ref={serviceLabelingRef}>
        <Ourservices
          className={activeSection === "section1" ? "active-section" : ""}
          textColor={serviceLabelingInView ? "black" : "#fff"}
        />
      </div>
      <div ref={serviceLabelingRef}>
        <ServiceLabeling
          className={activeSection === "section2" ? "active-section" : ""}
          textColor={serviceLabelingInView ? "white" : "#1A1A1A"}
          inView={serviceLabelingInView} // Pass inView status to ServiceLabeling component
        />
      </div>
      <Footer
        className={activeSection === "section3" ? "active-section" : ""}
      />
    </div>
  );
};

export default Services;
