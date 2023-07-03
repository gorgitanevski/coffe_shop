import React from "react";
import mainImg from "../img/main-photo.png";
import Navbar from "../features/navbar/Navbar";
import Button from "../ui/Button";

const MainSection = () => {
  return (
    <section
      className="bg-cover overflow-hidden h-screen"
      style={{ backgroundImage: `url(${mainImg})` }}
    >
      <Navbar color="white" />

      <div className="flex flex-col items-center justify-center text-white h-[100%]">
        <div className="flex flex-col lg:items-center items-start gap-4">
          <h1 className="xl:text-4xl text-[55px] font-[600] pb-4 ">
            Coffe - Makes you Love
          </h1>
          <p className="md:text-sm lg:text-base text-xl font-[600] lg:p-[2rem] leading-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat
            saepe dolorum perspiciatis facere hic similique,
            <br className={"lg:hidden block"} /> Natus atque laudantium at
            quaerat beatae excepturi debitis quod.
          </p>
          <Button>Buy Now</Button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
