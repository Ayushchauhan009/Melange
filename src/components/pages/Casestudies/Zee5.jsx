import React from "react";
import { Navbar, Footer } from "../../layout";

const Zee5 = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-14">
        <div>
          <div className="flex font-nunito justify-between px-28 items-center">
            <h1 className="font-bold text-4xl">ZEE5</h1>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-center font-extrabold text-5xl">7M+</h1>
                <p className="text-center font-medium text-[20px]">
                  paid subscribers
                </p>
              </div>
              <div className="mx-20">
                <h1 className="text-center font-extrabold text-5xl">1Bn+</h1>
                <p className="text-center font-medium text-[20px]">
                  impressions
                </p>
              </div>
              <div>
                <h1 className="text-center font-extrabold text-5xl">10M+</h1>
                <p className="text-center font-medium text-[20px]">
                  video views
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Zee5;
