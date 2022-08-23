import { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ input }) => {
  const [quantity, setQuantity] = useState(input.min);

  const increaseChangeHandler = () => {
    if (quantity < input.max) {
      setQuantity((prev) => prev + input.step);
    }
  };
  const decreaseChangeHandler = () => {
    if (quantity > input.min) {
      setQuantity((prevState) => prevState - input.step);
    }
  };
  let stateChanger = {
    "+": increaseChangeHandler,
    "-": decreaseChangeHandler,
  };

  return (
    <div className={styles.fragment}>
      <button className={styles.quantityButton} onClick={stateChanger["-"]}>
        -
      </button>
      <div className={styles.input}>
        <label htmlFor={input.id} {...input}>
          {input.label}
        </label>
        <input className={styles.inputfield} value={quantity}></input>
      </div>
      <button className={styles.quantityButton} onClick={stateChanger["+"]}>
        +
      </button>
    </div>
  );
};
export default Input;
