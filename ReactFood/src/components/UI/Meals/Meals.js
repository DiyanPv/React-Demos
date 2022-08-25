import React, { Fragment } from "react";
import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";

const Meals = ({setCartItems}) => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>

      <MealsList setCartItems={setCartItems}></MealsList>
    </Fragment>
  );
};

export default Meals;
