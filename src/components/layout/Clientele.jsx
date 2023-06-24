import React from "react";
import { clients } from "../../constants";

const Client = ({ icon }) => {
  return (
    <div className="bg-[#fff] blocks shadow-lg">
      <div className="flex justify-center items-center h-28 md:h-36 w-32 md:w-40">
        <img src={icon} alt="" className="w-24 md:w-24 h-auto invert" />
      </div>
    </div>
  );
};

const Clientele = () => {
  return (
    <div className="font-nunito pb-8 bg-[#1a1a1a] mt-32">
      <div className="mt-16 px-4 md:py-16 md:px-20 lg:px-28">
        <h1 className="text-[#fff] text-2xl md:text-3xl lg:text-4xl font-bold">
          Clientele
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-0 gap-y-10 px-28 ">
          {clients.map((client, index) => {
            return (
              <div key={index}>
                <Client icon={client.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clientele;
