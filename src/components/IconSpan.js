import { AiOutlineShoppingCart } from "react-icons/ai";

const IconSpan = (item, handleClickCart) => {
  return (
    <div className="relative">
      <AiOutlineShoppingCart
        fontSize={32}
        onClick={handleClickCart}
        className="cursor-pointer z-10"
      />
      {item.length > 0 && (
        <span className="color-white text-[12px] absolute top-0 right-[-7px] bg-[#ED4E53] rounded-full px-2 py-1">
          {item.length}
        </span>
      )}
    </div>
  );
};

export default IconSpan;
