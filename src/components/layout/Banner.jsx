import React from "react";
import { bannerVideo } from "../../assets/video";

const Banner = () => {
  return (
    <div className="w-full pt-16 ">
      <div className="aspect-w-9 aspect-h-16 ">
        <video
          className="object-cover"
          src={bannerVideo}
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
};

export default Banner;
