import classes from "./MealItemForm.module.css";
import CartContext from "../../../store-contents-context/cart-context";
import Input from "../../Input";
import Commands from "../../../common/commands";
const MealItemForm = ({ state, stateChange }) => {
  return (
    <div className={classes.form}>
      {state !== Commands.select ? (
        <div>
          <Input
            input={{
              id: `amount`,
              type: `number`,
              min: 1,
              max: 5,
              step: 1,
              defaultValue: 1,
            }}
          ></Input>
          <button className={classes.formbutton} onClick={CartContext.addItem}>
            + Add
          </button>
        </div>
      ) : (
        <button className={classes.formbutton} onClick={stateChange}>
          Select
        </button>
      )}
    </div>
  );
};

export default MealItemForm;
