import React from "react";
import ContactButton from "./ContactButton";

const Together = () => {
  return (
    <div className="bg-[#1a1a1a] font-nunito pb-6">
      <div className="relative z-0 py-24 shadow-md together text-center">
        <div className="flex flex-col items-center justify-end">
          <h1 className="font-extrabold text-2xl md:text-3xl lg:ml-[700px] multiverse-text">
            Let's work together!
          </h1>
          <div className="flex items-center lg:ml-[700px] justify-center">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Together;
