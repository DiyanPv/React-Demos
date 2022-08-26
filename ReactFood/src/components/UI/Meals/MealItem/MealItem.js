import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Commands from "../../../common/commands";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../../store-contents-context/cart-context";
const MealItem = (props) => {
  const [isSelected, setIsSelected] = useState(Commands.select);

  const ctx = useContext(CartContext);
  const stateChange = () => {
    setIsSelected(Commands.add);
  };
  const price = `$${props.price.toFixed(2)}`;

  const onAddtoCart = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal} key={props.id} id={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm
        setCartItems={props.setCartItems}
        state={isSelected}
        stateChange={stateChange}
        onAddtoCart={onAddtoCart}
      ></MealItemForm>
    </li>
  );
};

export default MealItem;
