import React from "react";
import { mail, phone, location } from "../../assets/images";
import Form from "./Form";
import MapButton from "./MapButton";

const ContactForm = () => {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-28 lg:py-24  sm:py-16 flex flex-col md:flex-row justify-between items-center font-nunito">
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold w-auto md:w-[70%]">
          Let's connect to build something memorable for your{" "}
          <span className="multiverse-text font-extrabold text-2xl md:text-4xl">
            Brand!
          </span>
        </h1>
        <div className="mt-16 mb-6">
          <p className="flex items-center mt-3">
            <img src={mail} alt="" className="w-6 h-6" />
            <span className="ml-3 font-semibold">
              <a href="mailto:hello@melangedigital.in">
                hello@melangedigital.in
              </a>
            </span>
          </p>
          <p className="flex items-center my-4 md:my-2">
            <img src={phone} alt="" className="w-6 h-6" />
            <span className="ml-3 font-semibold">
              <a href="tel:+917700974123">+91 7700974123</a>
            </span>
          </p>
          <p className="flex items-center">
            <img src={location} alt="" className="w-6 h-6" />
            <span className="ml-3 font-semibold">
              <a
                href="https://www.google.com/maps/place/Lodha+Supremus,+Andheri/@19.4280124,68.8564316,9z/data=!4m6!3m5!1s0x3be7c9fbdc277255:0xc0d0f6390ccdf263!8m2!3d19.1220835!4d72.8664415!16s%2Fg%2F11fl9j2bpk?entry=ttu"
                target="_blank"
              >
                L-302, The Trees Godrej, Vikhroli East Mumbai-400079
              </a>
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
