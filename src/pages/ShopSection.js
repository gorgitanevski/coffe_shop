import React, { useEffect, useState } from "react";
import { useFetchCoffesQuery } from "../apis";
import ShopSectionCard from "../features/shop/ShopSectionCard";
import Navbar from "../features/navbar/Navbar";
import Line from "../img/line.png";
import Footer from "./Footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ShopSection = () => {
  const { data, isLoading, isError } = useFetchCoffesQuery();

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setVisibleItems(data.slice(0, 8));
    }
  }, [data]);

  const handleViewMore = () => {
    const newVisibleItems = data.slice(
      0,
      visibleItems.length + 8 > data.length
        ? visibleItems.length
        : visibleItems.length + 9
    );

    setVisibleItems(newVisibleItems);
  };

  let content;
  if (isLoading) {
    return (content = (
      <div className="flex h-screen items-center justify-center text-7xl">
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <AiOutlineLoading3Quarters />
        </svg>
      </div>
    ));
  } else if (isError) {
    return (content = <div>Error fatching data</div>);
  } else {
    content = (
      <div className="flex flex-col justify-center items-center">
        <ShopSectionCard visibleItems={visibleItems} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto mt-[7rem]">
        <div className="flex flex-col justify-center items-center pb-[5rem]">
          <h2 className="text-4xl pb-2">Our Shop</h2>
          <img src={Line} alt="orange-line" />
        </div>
        <div>{content}</div>
        {visibleItems.length < data.length && (
          <button
            className="flex justify-center content-center px-7 py-2 bg-[#E54E1B] text-base text-white mx-auto my-[3rem]"
            onClick={handleViewMore}
          >
            View More
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ShopSection;
