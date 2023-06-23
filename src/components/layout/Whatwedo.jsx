import React, { useState } from "react";
import Servicessummary from "./Servicessummary";

const Whatwedo = () => {
  const [bgImage, setBgImage] = useState("../../assets/images/image1.jpg");

  const handleLinkHover = (image) => {
    setBgImage(image);
  };

  return (
    <div className={`px-6 md:py-1 bg-image ${bgImage} md:px-28`}>
      <Servicessummary />
    </div>
  );
};

export default Whatwedo;
