import React, { useState } from "react";
import Servicessummary from "./Servicessummary";
import { useMediaQuery } from "react-responsive";

const Whatwedo = () => {
  const [bgImage, setBgImage] = useState("../../assets/images/image1.jpg");
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleLinkHover = (image) => {
    setBgImage(image);
    setIsLinkHovered(false);
  };

  const handleLinkMouseOut = () => {
    setIsLinkHovered(false);
  };

  return (
    <div
      className={`px-6 md:py-1 ${
        isLinkHovered ? "bg-none" : "bg-[#1a1a1a]"
      } ${bgImage} ${isMobile ? "bg-[#1a1a1a]" : "bg-none"} md:px-24`}
      onMouseOut={handleLinkMouseOut}
    >
      <Servicessummary handleLinkHover={handleLinkHover} />
    </div>
  );
};

export default Whatwedo;
