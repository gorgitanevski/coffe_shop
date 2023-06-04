import React, { useContext } from "react";
import ImgLine from "../img/line.png";
import CoffeContext from "../context/coffeContext";

const CheckDetailsMain = ({ coffe }) => {
  const { addBookToCart } = useContext(CoffeContext);

  const handlerAddItem = () => {
    addBookToCart(coffe);
  };

  return (
    <div
      key={coffe.id}
      className="flex flex-row justify-center items-center md:flex-col"
      id="detalItem"
    >
      <img src={coffe.img} alt="coffe-img" className="w-[414px] h-[463px]" />
      <div className="p-7 max-w-[600px]">
        <div className="flex flex-col justify-center items-center mb-7">
          <div className="text-5xl font-semibold">{coffe.name}</div>
          <img src={ImgLine} alt="img-line" />
        </div>
        <p className="text-[#838383] md:text-xl text-2xl mb-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen .
        </p>

        <div className="flex gap-1.5">
          <p className="font-bold text-[#888]">Ingrediants:</p>

          {coffe.ingridiants.map((ing) => (
            <div className="font-semibold text-[#838383]">{ing}</div>
          ))}
        </div>
        <p className="font-semibold text-[#838383]">Price: ${coffe.price}</p>
        <button
          className="bg-[#E54E1B] rounded-[5px] px-8 py-2 mt-7"
          onClick={() => handlerAddItem(coffe)}
        >
          Add to card
        </button>
      </div>
    </div>
    // <div>da</div>
  );
};

export default CheckDetailsMain;

/*
const { checkDetailsItem } = useContext(CoffeContext);
  const { data, isError, isLoading } = useFetchCoffeIdQuery(checkDetailsItem);

  console.log(data, isError, isLoading);
  return (
    <div
      key={checkDetailsItem.id}
      className="flex flex-row justify-center items-center md:flex-col"
      id="detalItem"
    >
      <img
        src={checkDetailsItem.img}
        alt="coffe-img"
        className="w-[414px] h-[463px]"
      />
      <div className="p-7 max-w-[600px]">
        <div className="flex flex-col justify-center items-center mb-7">
          <div className="text-5xl font-semibold">{checkDetailsItem.name}</div>
          <img src={ImgLine} alt="img-line" />
        </div>
        <p className="text-[#838383] md:text-xl text-2xl mb-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen .
        </p>
        <div className="flex gap-1.5">
          <p className="font-bold text-[#888]">Ingrediants:</p>

          {checkDetailsItem.ingridiants.map((ing) => (
            <div className="font-semibold text-[#838383]">{ing}</div>
          ))}
        </div>
        <button className="bg-[#E54E1B] rounded-[5px] px-8 py-2 mt-7">
          Add to card
        </button>
      </div>
    </div>
  );
  */
