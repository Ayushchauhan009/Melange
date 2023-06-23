import React from "react";
import ContactButton from "./ContactButton";

const Together = () => {
  return (
    <div className="bg-[#1a1a1a] font-nunito pb-6">
      <div className="mx-6 md:mx-56 -mt-44 z-0 py-16  shadow-md absolute right-24 together p-[19%] text-center">
        <div className=" pb-32 mb-2">
          <h1 className="font-extrabold text-2xl md:text-3xl multiverse-text">
            Let's work together!
          </h1>
          <div className="flex items-center justify-center ">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Together;
