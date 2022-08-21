import React, { Fragment } from "react";
import MealsList from "./MealsList";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsList></MealsList>
      <MealsSummary></MealsSummary>
    </Fragment>
  );
};

export default Meals;
