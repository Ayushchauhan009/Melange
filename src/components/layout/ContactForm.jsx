import React from "react";
import { mail, phone, location } from "../../assets/images";
import Form from "./Form";
import MapButton from "./MapButton";

const ContactForm = () => {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-28 lg:py-24 md:20 sm:py-16 flex flex-col md:flex-row justify-evenly items-center font-nunito">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold w-[70%]">
          Let's connect to build something memorable for your{" "}
          <span className="multiverse-text font-extrabold text-[32px]">
            Brand!
          </span>
        </h1>
        <div className="mt-16 mb-6">
          <p className="flex items-center mt-3">
            <img src={mail} alt="" className="w-6 h-6" />
            <span className="ml-3 font-semibold">hello@melangedigital.in</span>
          </p>
          <p className="flex items-center my-2">
            <img src={phone} alt="" className="w-6 h-6" />
            <span className="ml-3 font-semibold">+91 7700974123</span>
          </p>
          <p className="flex items-center">
            <img src={location} alt="" className="w-6 h-6" />
            <span className="ml-3 font-semibold">
              L-302, The Trees Godrej, Vikhroli East Mumbai-400079
            </span>
          </p>
        </div>
        <div className="mt-6">
          <MapButton />
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2">
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
