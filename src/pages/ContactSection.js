import React from "react";
import Input from "../ui/input";
import bgImg from "../img/contact.jpg";
import Navbar from "../features/navbar/Navbar";

const ContactSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        opacity: "0.9",
      }}
    >
      <Navbar color="white" />
      <form className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-3">
          <h2 className="text-6xl font-semibold mb-[3rem]  text-[#E54E1B]">
            Contact Us
          </h2>
          <Input type="text" ph="Name" />
          <Input type="email" ph="Email address" />
          <Input type="text" ph="Subject" />
          <textarea
            placeholder="Message"
            className="h-[100px] border-2 p-3 resize-none text-2xl"
          />
          <button className="py-2 px-6 bg-[#E54E1B] transition duration-300 ease-out-in hover:bg-white mx-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
