import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState(``);
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value.trim() === ``) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    if (isValid) {
      setEnteredValue(event.target.value);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
    }

    if (isValid) {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          style={{
            background: !isValid ? `salmon` : `white`,
            placeholder: !isValid ? `IncorrectInput` : ``,
          }}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
