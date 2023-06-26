import React, { useState } from "react";
import Servicessummary from "./Servicessummary";

const Whatwedo = () => {
  const [bgImage, setBgImage] = useState("../../assets/images/image1.jpg");
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const handleLinkHover = (image) => {
    setBgImage(image);
    setIsLinkHovered(true);
  };

  const handleLinkMouseOut = () => {
    setIsLinkHovered(false);
  };

  return (
    <div
      className={`px-6 md:py-1 ${
        isLinkHovered ? "" : "bg-[#1a1a1a]"
      } ${bgImage} md:px-24`}
      onMouseOut={handleLinkMouseOut}
    >
      <Servicessummary handleLinkHover={handleLinkHover} />
    </div>
  );
};

export default Whatwedo;
