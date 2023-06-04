import { createContext, useState } from "react";

const CoffeContext = createContext();

const Coffes = ({ children }) => {
  const [sellectCartItem, setSellectCartItem] = useState([]);

  const addBookToCart = (coffeItem) => {
    const existingItem = sellectCartItem.find(
      (item) => item.id === coffeItem.id
    );

    if (existingItem) {
      setSellectCartItem((prevItems) =>
        prevItems.map((item) =>
          item.id === coffeItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setSellectCartItem((prevItems) => [
        ...prevItems,
        { ...coffeItem, quantity: 1 },
      ]);
    }
  };

  const valueToShare = {
    addBookToCart,
    sellectCartItem,
    setSellectCartItem,
  };

  return (
    <CoffeContext.Provider value={valueToShare}>
      {children}
    </CoffeContext.Provider>
  );
};

export { Coffes };
export default CoffeContext;
