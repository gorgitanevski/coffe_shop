import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartItem = ({ cardCoffe, handleQuantityChange, onRemoveCoffe }) => {
  const { quantity, id: coffeId, name, img, price } = cardCoffe;

  const handleClickInc = () => {
    const newQuantity = quantity + 1;

    handleQuantityChange(coffeId, newQuantity);
  };

  const handleClickDec = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;

      handleQuantityChange(coffeId, newQuantity);
    } else {
      onRemoveCoffe(coffeId);
    }
  };

  const handleRemoveClick = () => {
    onRemoveCoffe(coffeId);
  };

  return (
    <div className="flex justify-between items-center sm:max-w-[100%]">
      <div className="flex justify-center items-center gap-3">
        <div className="max-w-[70px]  max-h-[70px] flex-shrink-0">
          <img src={img} alt="cartimg" className="w-[70px] h-[70px] " />
        </div>
        <div>
          <h5 className="w-3 sm:max-w-[auto] mr-7 ">{name}</h5>
        </div>
      </div>
      <div className="flex gap-3 justify-between items-center border border-black py-2 px-4 text-xl w-[7rem] sm:max-w-[auto]">
        <p onClick={handleClickInc} className="cursor-pointer">
          +
        </p>
        <p>{quantity}</p>
        <p onClick={handleClickDec} className="cursor-pointer">
          -
        </p>
      </div>
      <span>${price * quantity}</span>
      <AiOutlineCloseCircle
        fontSize={25}
        color="white"
        onClick={handleRemoveClick}
        className="cursor-pointer hover:color-black"
      />
    </div>
  );
};

export default CartItem;
