import React from "react";
import ContactButton from "./ContactButton";

const Together = () => {
  return (
    <div className="bg-[#1a1a1a] font-nunito pb-6">
      <div className=" -mt-32 z-0 py-24 shadow-md absolute together w-[80%] right-36 h-64  text-center">
        <div className=" flex flex-col items-center  justify-end">
          <h1 className="font-extrabold text-2xl md:text-3xl ml-[700px] multiverse-text">
            Let's work together!
          </h1>
          <div className="flex items-center ml-[700px] justify-center">
            <ContactButton />
          </div>
        </div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        @media (max-width: 767px) {
          .together {
            position: relative;
            right: initial;
            left: initial;
            margin: 0;
            padding: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Together;
