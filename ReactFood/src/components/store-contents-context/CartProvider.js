import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === `ADD_ITEM`) {
    const newArr = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: newArr,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
  }
  return defaultCartState;
};
const newCartCtx = CartContext._currentValue;

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id,
    });
  };
  newCartCtx.items = cartState.items;
  newCartCtx.totalAmount = cartState.totalAmount;
  newCartCtx.addItem = addItemToCartHandler;
  newCartCtx.removeItem = removeItemFromCartHandler;

  return (
    <CartContext.Provider value={newCartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
