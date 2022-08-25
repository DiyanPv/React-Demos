import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";

import CartContext from "../../store-contents-context/cart-context";
const Cart = ({ modalStateTracker }) => {
  const data = useContext(CartContext);
  const cartitems = [...data.items];
  console.log(data)
  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {cartitems.map((item) => (
        <li key={item.id} className={classes.cartItem}>
        <span className={classes.itemName}>  {item.name}</span>
          <span>Price: ${item.price}</span>
          <span>Amount: {item.amount}</span>
          <button className={classes.btn}>Remove</button>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{`$${data.totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes[`button--alt`]}
          onClick={modalStateTracker.unclicked}
        >
          Cancel
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
