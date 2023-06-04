import React from "react";

const AboutCard = () => {
  return (
    <div className="w-[387px] h-[225px] border rounded-[30px] p-3 flex flex-col justify-around transition duration-300 ease-in hover:bg-[#E54E1B] shadow-lg hover:text-white">
      <h5 className="text-3xl text-center">Lorem Ipsum</h5>

      <p className="text-xs ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default AboutCard;
