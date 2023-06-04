import React from "react";
import { useFetchCoffesQuery } from "../apis";
import ShopSectionCard from "./ShopSectionCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RandomDetailsCards = () => {
  const { data, isLoading, isError } = useFetchCoffesQuery();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-7xl">
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <AiOutlineLoading3Quarters />
        </svg>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const randomItems = data
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // const checkItems = randomItems.some((it) => it.id === coffe.id);

  return <div>{<ShopSectionCard visibleItems={randomItems} />}</div>;
};
export default RandomDetailsCards;
