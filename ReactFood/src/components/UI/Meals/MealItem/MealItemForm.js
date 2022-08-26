import classes from "./MealItemForm.module.css";
import Input from "../../Input";
import Commands from "../../../common/commands";
const MealItemForm = ({ state, stateChange, onAddtoCart, setCartItems }) => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const el = event.target.parentElement;
    const enteredAmount = Number(el.querySelector(`input`).value);
    if (enteredAmount.length === 0 || enteredAmount < 1 || enteredAmount > 5) {
      throw new Error(`Invalid Number`);
    } else {
      onAddtoCart(enteredAmount);
      setCartItems((prevstate) => prevstate += enteredAmount)
    }
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
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
          <button className={classes.formbutton}>+ Add</button>
        </div>
      ) : (
        <div className={classes.formbutton} onClick={stateChange}>
          Select
        </div>
      )}
    </form>
  );
};

export default MealItemForm;
