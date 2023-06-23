import React from "react";
import { maparrow } from "../../assets/images";
const MapButton = () => {
  return (
    <div className="my-3">
      <button className="map-button font-nunito ">
        <span className="map-text font-bold text-[#0f0330]">
          Open in Google Maps
        </span>
        <span className="arrow-container">
          <img
            src={maparrow}
            alt="Arrow"
            className="w-5  h-5 mt-1 mr-0.5 arrow-image"
          />
        </span>
      </button>
    </div>
  );
};

export default MapButton;
