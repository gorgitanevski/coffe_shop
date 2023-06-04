import React from "react";
import imgCeo from "../img/ceo.jpg";
import lineImg from "../img/line.png";
import { faker } from "@faker-js/faker";

const MeetCeo = () => {
  return (
    <div className="max-w-[1200px] mx-auto mb-[3rem] lg:flex-col lg:items-center flex lg:gap-7 gap-3 xl:p-3 p-7">
      <div className="p-5 flex flex-col  lg:flex-reverse lg:flex-reverse gap-7 lg:gap-[4rem] w-[70%]">
        <div className="mb-5 md:mb-0 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <h2 className="text-4xl font-semibold sm:text-2xl">
            Meet Founder and Ceo
          </h2>
          <img src={lineImg} alt="line" className="pl-11 lg:pl-0 pt-1 " />
        </div>

        <p className="sm:text-base text-xl leading-6 text-[#7A7A7A]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          look like readable English. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </p>

        <div>
          <h4 className="text-2xl font-semibold">{faker.name.fullName()}</h4>
          <span>Founder and Ceo</span>
        </div>
      </div>
      <img
        src={imgCeo}
        alt="aboutus"
        className="lg:w-[80%] w-[460px] h-[500px] "
      />
    </div>
  );
};

export default MeetCeo;
// <div className="max-w-[1200px] mx-auto flex">
//   <div>
//     <h3>Meet Founder and Ceo</h3>
//     <p>
//       It is a long established fact that a reader will be distracted by the
//       readable content of a page when looking at its layout. The point of
//       using Lorem Ipsum is that it has a more-or-less normal distribution of
//       letters, as opposed to using 'Content here, content here', making it
//       look like readable English.
//     </p>
//   </div>
//   <img src={imgCeo} alt="ceo" className="w-[460px] h-[588px]" />
// </div>
