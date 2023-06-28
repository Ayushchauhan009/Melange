import React from "react";
import { rightArrow } from "../../assets/images";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <div className="my-3">
      <Link to="/contact" className="expand-button font-nunito">
        <span className="button-text font-bold text-[#0f0330]">Contact Us</span>
        <span className="arrow-container">
          <img
            src={rightArrow}
            alt="Arrow"
            className="w-5  h-6 mt-0.5 mr-0.5 arrow-image"
          />
        </span>
      </Link>
    </div>
  );
};

export default ContactButton;
