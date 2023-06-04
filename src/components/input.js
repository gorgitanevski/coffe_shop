import React from "react";

const Input = ({ type, ph }) => {
  return (
    <input
      type={type}
      placeholder={ph}
      className="border-2 rounded-[5px] p-3 text-2xl"
    />
  );
};

export default Input;
