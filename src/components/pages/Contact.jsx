import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Navbar, ContactForm, Footer } from "../layout";

const Contact = () => {
  const [activeSection, setActiveSection] = useState("");
  const [ContactFormRef, ContactFormInView] = useInView();

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition < window.innerHeight) {
        setActiveSection("section1");
      } else if (
        currentPosition >= window.innerHeight &&
        currentPosition < 2 * window.innerHeight
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
      duration: 1000,
      smooth: "easeInOutQuart",
      offset: 100,
    });
  };

  return (
    <div className={activeSection === "section2" ? "service-page" : ""}>
      <Navbar />
      <div ref={ContactFormRef}>
        <ContactForm
          className={activeSection === "section2" ? "active-section" : ""}
          textColor={ContactFormInView ? "#1a1a1a" : "#1A1A1A"}
        />
      </div>
      <Footer
        className={activeSection === "section3" ? "active-section" : ""}
      />
    </div>
  );
};

export default Contact;
