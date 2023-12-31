import React from "react";
import { clients } from "../../constants";
import { useMediaQuery } from "react-responsive";

const Client = ({ icon }) => {
  return (
    <div className="bg-[#fff] blocks shadow-lg">
      <div className="flex justify-center items-center h-28 md:h-36 w-40 md:w-40">
        <img src={icon} alt="" className="w-24 md:w-24 h-auto invert" />
      </div>
    </div>
  );
};

const Clientele = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="font-nunito pb-16 2xl:pb-12 bg-[#1a1a1a]  sm:mt-40  xl:mt-56">
      <div className="mt-16 px-6 py-8 md:py-16 md:px-24 lg:px-28 2xl:px-32">
        <h1 className="text-[#fff] text-2xl md:text-3xl lg:text-4xl font-bold">
          Clientele
        </h1>
      </div>
      <div className="px-0 md:px-8 lg:px-24">
        {isMobile ? (
          <div className="flex overflow-x-scroll ml-6 scroll-container">
            <div className="flex flex-nowrap scroll-animation">
              {clients.map((client, index) => (
                <div key={index} className="flex justify-center mr-6">
                  <Client
                    icon={client.icon}
                    className={index === 7 ? "eighth-child" : ""}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-0 gap-y-6 md:gap-y-10 mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center">
                <Client
                  icon={client.icon}
                  className={index === 7 ? "eighth-child" : ""}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Clientele;
