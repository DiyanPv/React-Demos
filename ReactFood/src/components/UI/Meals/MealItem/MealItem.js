import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Commands from "../../../common/commands";
import { useState } from "react";
const MealItem = (props) => {
  const [isSelected, setIsSelected] = useState(Commands.select);
  const stateChange =()=> {
    setIsSelected(Commands.add)
  }
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal} key={props.id} id={props.id} >
      <div >
        <h3>{props.name}</h3>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm state={isSelected} stateChange={stateChange} ></MealItemForm>
    </li>
  );
};

export default MealItem;
