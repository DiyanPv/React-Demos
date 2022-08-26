import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";

import CartContext from "../../store-contents-context/cart-context";
const Cart = ({ modalStateTracker, cartAmount, setCartAmount }) => {
  const data = useContext(CartContext);
  const onAddtoCart = (item) => {
    data.addItem({ ...item, amount: 1 });
  };
  const onRemoveHandler = (id) => {
    data.removeItem(id);
  };

  const cartitems = [...data.items];
  const hasItems = data.items.length > 0;

  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {cartitems.map((item) => (
        <li key={item.id} className={classes.cartItem}>
          <span className={classes.itemName}> {item.name}</span>
          <span className={classes.itemamount}>x{item.amount}</span>
          <span className={classes.itemName}>Price: ${item.price}</span>

          <div>
            <button
              className={`${classes[`button--alt`]} ${classes.btn}`}
              onClick={onRemoveHandler.bind(null, item.id)}
            >
              -
            </button>
            <button
              className={`${classes[`button--alt`]} ${classes.btn}`}
              onClick={onAddtoCart.bind(null, item)}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      {hasItems ? (
        <div className={classes.total}>
          <span>Total Amount:</span>
          <span>{`$${data.totalAmount.toFixed(2)}`}</span>
        </div>
      ) : (
        `Your cart is empty!`
      )}
      <div className={classes.actions}>
        <button
          className={classes[`button--alt`]}
          onClick={modalStateTracker.unclicked}
        >
          Cancel
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
