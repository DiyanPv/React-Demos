import React from "react";

const removeItemFromCartHandler = (id) => {};
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
