import React from "react";
import lineImg from "../img/line.png";
import { useFetchCoffesQuery } from "../apis";
import ShopSectionCard from "../components/ShopSectionCard";
import Button from "../components/Button";

const OurShopCon = () => {
  const { data, isError, isLoading } = useFetchCoffesQuery();
  const randomItems = data
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  let content;
  if (isLoading) {
    return (content = <div>is loading...</div>);
  } else if (isError) {
    return (content = <div>Error fetching data</div>);
  } else {
    content = <ShopSectionCard visibleItems={randomItems} />;
  }

  return (
    <div className="mb-[3rem]">
      <div className="mb-5 w-[100%] mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold">About Coffe Shop</h2>
        <img src={lineImg} alt="line" className="pl-5 pt-1" />
      </div>

      <div className="flex flex-col justify-center items-center gap-7">
        {content}
        <Button>See All</Button>
      </div>
    </div>
  );
};

export default OurShopCon;
