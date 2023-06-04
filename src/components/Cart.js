import React, { useContext } from "react";
import CoffeContext from "../context/coffeContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { sellectCartItem, setSellectCartItem } = useContext(CoffeContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = sellectCartItem.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setSellectCartItem(updatedItems);
    onTotalCostChange();
  };

  const handleRemoveCoffe = (coffeId) => {
    const updatedItems = sellectCartItem.filter((item) => item.id !== coffeId);
    setSellectCartItem(updatedItems);
  };

  const onTotalCostChange = () => {
    const total = calculateTotalCost();
    console.log("Total Cost:", total);
  };

  const calculateTotalCost = () => {
    let total = 0;
    sellectCartItem.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  return (
    <div className="w-[500px] sm:max-w-[400px] min-h-[100px] bg-[#E54E1B] flex flex-col gap-3 p-3 slide-top">
      {sellectCartItem.map((cardCoffe) => {
        return (
          <CartItem
            key={cardCoffe.id}
            cardCoffe={cardCoffe}
            handleQuantityChange={handleQuantityChange}
            onRemoveCoffe={handleRemoveCoffe}
          />
        );
      })}
      <div className="border-t-4 flex flex-row-reverse justify-between items-center pt-3">
        <p>
          totalCost: <span>${calculateTotalCost()}</span>
        </p>
        <button className="border px-5 py-2 transition duration-300 ease-in-out hover:text-white hover:bg-black">
          Check out
        </button>
      </div>
    </div>
  );
};
export default Cart;
