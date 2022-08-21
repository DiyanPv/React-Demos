import React from "react";
import classes from "./HeaderCart.module.css";
const HeaderCard = () => {
    const icon = "fa-solid fa-cart-shopping"
  return (
   
      <button className={classes.button}>
        <span>
          <i className={`${icon} ${classes.icon}`}></i>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}>3</span>
      </button>

  );
};
export default HeaderCard;
