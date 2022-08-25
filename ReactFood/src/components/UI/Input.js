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
    plus: increaseChangeHandler,
    minus: decreaseChangeHandler,
  };

  return (
    <div className={styles.fragment}>
      <div className={styles.quantityButton} onClick={stateChanger.minus}>
        -
      </div>
      <div className={styles.input}>
        <label htmlFor={input.id} {...input}>
          {input.label}
        </label>
        <input
          className={styles.inputfield}
          readOnly={quantity}
          value={quantity}
        ></input>
      </div>
      <div className={styles.quantityButton} onClick={stateChanger.plus}>
        +
      </div>
    </div>
  );
};
export default Input;
