import React, { useContext } from "react";
import CoffeContext from "../context/coffeContext";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const ShopSectionCardItem = ({ coffe }) => {
  const { addBookToCart } = useContext(CoffeContext);
  const navigate = useNavigate();

  const handlerClickCart = () => {
    addBookToCart(coffe);
  };

  const handlerTopPage = () => {
    window.scrollTo(0, 0);
    navigate(`/coffes/${coffe.id}`);
  };

  return (
    <div
      key={coffe.id}
      className="w-[235px] h-[300px] border-2 border-[#888] flex flex-col items-center justify-center rounded-[15px]"
    >
      <div className="w-[102px] h-[106px] rounded-[50px] overflow-hidden">
        <img
          src={coffe.img}
          alt="coffe-img"
          className="w-[102px] h-[106px] rounded-[50px] mb-4  hover:scale-125 transition duration-350 ease-in-out"
        />
      </div>

      <div className="flex flex-col gap-3 p-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[22px] leading-4 text-[#E54E1B]">
            {coffe.name}
          </p>
          <span className="font-semibold text-[22px]">${coffe.price}</span>
        </div>
        <ul className="flex flex-wrap gap-1">
          {coffe.ingridiants.map((ing) => {
            return (
              <li key={nanoid()} className="text-sm text-[#838383;]">
                {ing},
              </li>
            );
          })}
        </ul>

        <div className="text-xs flex justify-between items-center gap-2">
          <button
            onClick={() => handlerClickCart(coffe)}
            className="border hover:bg-white transition  ease-in-out duration-300  bg-[#E54E1B] p-2 rounded-[20px]"
          >
            Add to card
          </button>
          <button
            className="border-2 hover:bg-[#999] transition  ease-in-out duration-300 p-2 rounded-[20px]"
            onClick={handlerTopPage}
          >
            <Link to={`/coffes/${coffe.id}`}>Check more...</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopSectionCardItem;
