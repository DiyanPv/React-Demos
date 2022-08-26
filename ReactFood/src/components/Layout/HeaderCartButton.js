import React  from "react";
import { useContext } from "react";
import CartContext from "../store-contents-context/cart-context";
import classes from "./HeaderCart.module.css";

const HeaderCard = ({ modalStateTracker }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const icon = "fa-solid fa-cart-shopping";
  return (
    <button className={classes.button} onClick={modalStateTracker.clicked}>
      <span>
        <i className={`${icon} ${classes.icon}`}></i>
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCard;
