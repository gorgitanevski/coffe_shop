import React, { useContext, useState } from "react";
import NavbarLinks from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "../cart/Cart";
import CoffeContext from "../../context/coffeContext";

const Navbar = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const { sellectCartItem } = useContext(CoffeContext);

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

  const novSpan = (
    <div className="relative cursor-pointer" onClick={handleClickCart}>
      <AiOutlineShoppingCart fontSize={32} />
      {sellectCartItem.length > 0 && (
        <span className="color-white text-[11px] absolute top-0 right-[-7px] bg-[#E54E1B] rounded-full px-2 py-1">
          {sellectCartItem.length}
        </span>
      )}
    </div>
  );

  return (
    <nav
      className={`text-${color} flex md:justify-between md:px-11 justify-around items-center pt-2 relative`}
    >
      <div className="font-bold text-[30px] leanded-[45px]">Logo</div>
      <div className="md:hidden flex gap-2 relative">
        <NavbarLinks flex="row" />

        {novSpan}
        {isOpenCart && (
          <div className="absolute right-0 top-[9rem]">
            <Cart />
          </div>
        )}
      </div>

      <div className="md:flex justify-center items-center gap-3 hidden">
        <div className="hidden md:block">{novSpan}</div>
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
