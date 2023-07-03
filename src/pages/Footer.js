import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="h-[200px] bg-[#E89072] flex sm:flex-c flex-row justify-around items-center">
      <div className="flex flex-col gap-1">
        <h4>Logo</h4>
        <p>Info@info.com</p>
        <p>phone: 00022737282</p>
      </div>
      <div className="flex flex-col text-center gap-2">
        <h4 className="font-semibold">NEWSLETTER</h4>
        <input type="email" placeholder="Enter email" className="pl-1" />
        <button className="border text-sm text-white hover:text-black hover:bg-white rounded-[50px] transition duration-150 ease-out p-1">
          SUBSCRIBE NOW
        </button>
      </div>
      <div>
        <p>
          1701 W. Ben White Blvd,
          <br /> Ste 999 Austin,
        </p>
        <div className="text-[30px] flex gap-3">
          <BsFacebook />
          <BsInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
