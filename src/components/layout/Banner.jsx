import React from "react";
import { bannerVideo } from "../../assets/video";

const Banner = () => {
  return (
    <div className="relative">
      <video
        className="w-full h-auto"
        src={bannerVideo}
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default Banner;
