import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";

const Navbar = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleNavbarClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  const icon = isOpen ? (
    <AiOutlineClose
      fontSize={32}
      className="hidden md:block"
      onClick={handleNavbarClick}
    />
  ) : (
    <GiHamburgerMenu
      fontSize={32}
      className="hidden md:block"
      onClick={handleNavbarClick}
    />
  );

  return (
    <nav
      className={`text-${color} flex md:justify-between md:px-11 justify-around items-center pt-2 relative`}
    >
      <div className="font-bold text-[30px] leanded-[45px]">Logo</div>
      <div className="md:hidden flex gap-2 relative">
        <NavbarLinks flex="row" />
        <AiOutlineShoppingCart
          fontSize={32}
          onClick={handleClickCart}
          className="cursor-pointer"
        />
        {isOpenCart && (
          <div className="absolute right-0 top-[9rem]">
            <Cart />
          </div>
        )}
      </div>

      <div className="md:flex justify-center items-center gap-3 hidden">
        <AiOutlineShoppingCart
          fontSize={32}
          className="hidden md:block"
          onClick={handleClickCart}
        />
        {isOpenCart && (
          <div className="absolute right-0 top-[10rem]">
            <Cart />
          </div>
        )}
        {icon}
        {isOpen && (
          <div className="absolute right-10 top-[-2.5rem] bg-[#E54E1B] rounded-[10px] p-7 slide-bottom">
            <NavbarLinks flex="col" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

/* <div className="flex justify-center items-center gap-3">
        <AiOutlineShoppingCart fontSize={32} className="" />

        {icon}
        {isOpen && (
          <div className="absolute right-10 top-[-2.5rem] bg-[#E54E1B] rounded-[10px] p-7 slide-bottom">
            <NavbarLinks flex="col" />
          </div> 
        )}
      </div> */
