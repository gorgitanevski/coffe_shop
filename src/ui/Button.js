import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children }) => {
  return (
    <button className="bg-[#E54E1B] rounded-[5px] px-8 py-2 transition duration-300 ease-in-out hover:brightness-125">
      <Link to="/shop"> {children}</Link>
    </button>
  );
};

export default Button;
