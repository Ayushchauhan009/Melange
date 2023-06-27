import React from "react";
import ContactButton from "./ContactButton";

const Together = () => {
  return (
    <div className="bg-[#1a1a1a] font-nunito pb-6">
      <div className="mx-6 md:mx-4 -mt-36 z-0 py-16 shadow-md absolute right-0 md:right-24 together px-[32%] text-center">
        <div className="pb-32 mb-2 -mt-8">
          <h1 className="font-extrabold text-2xl md:text-3xl multiverse-text">
            Let's work together!
          </h1>
          <div className="flex items-center justify-center">
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
