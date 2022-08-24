import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
const Cart = ({ modalStateTracker }) => {
  const cartitems = [

  ];
  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {cartitems.map((item) => (
        <li key={item.id} className={classes.cartItem}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{`${0} lv`}</span>
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
