import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  Navbar,
  Banner,
  AboutSummary,
  Whatwedo,
  WorkSummary,
  Clientele,
  Testimonials,
  Footer,
} from "../layout";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateOpacity = (componentNumber) => {
    const threshold = window.innerHeight * (componentNumber - 1);

    if (scrollPosition >= threshold) {
      return 1;
    } else {
      return 0;
    }
  };

  const calculateBackgroundColor = (componentNumber) => {
    const threshold = window.innerHeight * (componentNumber - 1);

    if (scrollPosition >= threshold) {
      return "#FFF"; // Change this value to the desired background color
    } else {
      return "#1A1A1A"; // Change this value to the default background color
    }
  };

  const fadeIn = useSpring({
    opacity: calculateOpacity(2),
    from: { opacity: 1 },
    config: { duration: 500 },
  });

  const fadeOut = useSpring({
    opacity: calculateOpacity(2),
    from: { opacity: 1 },
    config: { duration: 500 },
  });

  const currentComponent = scrollPosition / window.innerHeight + 1;

  const navbarStyle = {
    backgroundColor: calculateBackgroundColor(currentComponent),
    // Add any other styling properties for the navbar
  };

  return (
    <>
      <Navbar style={navbarStyle} />
      <Banner />
      <div>
        <AboutSummary />
      </div>
      <animated.div style={fadeOut}>
        <Whatwedo />
      </animated.div>
      {/* Repeat the animated divs for other components */}
      <animated.div style={fadeOut}>
        <WorkSummary />
      </animated.div>
      <animated.div style={fadeIn}>
        <Clientele />
      </animated.div>
      <animated.div style={fadeIn}>
        <Testimonials />
      </animated.div>
      <animated.div style={fadeIn}>
        <Footer />
      </animated.div>
    </>
  );
};

export default Home;
