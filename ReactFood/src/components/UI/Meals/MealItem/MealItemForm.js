import classes from "./MealItemForm.module.css";

import React from "react";
import Input from "../../Input";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount`,
          type: `number`,
          min: 1,
          max: 5,
          step: 1,
          defaultvalue: 1,
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
