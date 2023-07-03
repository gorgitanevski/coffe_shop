import React from "react";

import ShopSectionCardItem from "./ShopSectionCardItem";

const ShopSectionCard = ({ visibleItems }) => {
  return (
    <div className="flex flex-wrap gap-[30px] items-center justify-center">
      {visibleItems.map((coffe) => {
        return <ShopSectionCardItem key={coffe.id} coffe={coffe} />;
      })}
    </div>
  );
};

export default ShopSectionCard;
