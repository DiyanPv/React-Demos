import React, { Fragment } from "react";
import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";

const Meals = ({setCartItems, setModalItem}) => {
  return (
    <Fragment>
      <MealsSummary setModalItem={setModalItem}></MealsSummary>

      <MealsList setModalItem={setModalItem} setCartItems={setCartItems}></MealsList>
    </Fragment>
  );
};

export default Meals;
