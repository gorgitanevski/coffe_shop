import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import aboutImg from "../img/about-photo.png";

import lineImg from "../img/line.png";

const AboutUsCon = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-[7rem] lg:flex-col-reverse lg:items-center flex lg:gap-7 gap-3 xl:p-3">
      <img src={aboutImg} alt="aboutus" className="lg:w-[80%]" />

      <div className="p-5 flex lg:flex-reverse flex-col gap-7 lg:gap-[4rem]">
        <div className="mb-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <h2 className="text-4xl font-semibold ">About Coffe Shop</h2>
          <img src={lineImg} alt="line" className="pl-5 pt-1" />
        </div>

        <p className=" text-xl leading-6 text-[#7A7A7A]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>

        <p className=" text-xl leading-6 text-[#7A7A7A]">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions.
        </p>

        <div className="text-3xl flex gap-3 cursor-pointer">
          <BsFacebook className="hover:text-[#7A7A7A]" />
          <BsInstagram className="hover:text-[#7A7A7A]" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsCon;
