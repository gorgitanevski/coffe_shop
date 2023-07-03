import React from "react";

import { Link } from "react-router-dom";

const borderBot =
  "transition duration-300 ease-in-out hover:border-b hover:border-black";

const NavbarLinks = ({ flex }) => {
  return (
    <ul
      className={`text-[20px] flex  flex-${flex} gap-5 itmes-center justify-center cursor-pointer`}
    >
      <li className={`${borderBot}`}>
        <Link to="/">Home</Link>
      </li>
      <li className={`${borderBot}`}>
        <Link to="/about">About</Link>
      </li>
      <li className={`${borderBot}`}>
        <Link to="/shop">Shop</Link>
      </li>
      <li className={`${borderBot}`}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
