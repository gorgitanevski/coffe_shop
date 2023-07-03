import React from "react";
import AboutCard from "./AboutCard";

const CoffeShopCon = () => {
  return (
    <div className="py-[9.6rem] max-w-[1200px] mx-auto">
      <div className="text-center mb-[6rem]">
        <h3 className=" text-4xl font-semibold ">Coffe Shop</h3>
        <p className="text-lg font-bold text-[#E54E1B] pb-7">
          WHY YOU SHOULD BUY FROM US
        </p>
      </div>

      <div className="flex flex-row md:flex-col md:justify-center md:items-center gap-5">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  );
};

export default CoffeShopCon;
