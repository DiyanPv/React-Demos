import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = ({ onAddUser }) => {
  const userNameInputRef = useRef();
  const userAgeinputRef = useRef();

  const inputUsername = userNameInputRef;
  const inputAge = userAgeinputRef;
  const [enteredUsername, setUserName] = useState(``);
  const [enteredAge, setAge] = useState(``);
  const [error, setError] = useState();

  const adduserHandler = (e) => {
    e.preventDefault();
    const userNameInput = inputUsername.current.value;
    const userAgeInput = inputAge.current.value;
    console.log(userAgeInput);
    if (userNameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non empty values)",
      });
      return;
    }
    if (userAgeInput < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (>0)!",
      });
      return;
    }

    onAddUser(userNameInput, userAgeInput);
    document.querySelector(`#username`).value = `Ne`;
    document.querySelector(`#age`).value = ``;
    console.log(document.querySelector(`#username`));
  };

  const errorHandler = () => {
    setError(null);
  };

  const userNameChangeHandler = (event) => {
    let userNameInput = inputUsername.current.value;
    setUserName(userNameInput);
  };

  const ageEnteredHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        ></ErrorModal>
      ) : (
        ``
      )}

      <Card className={classes.input}>
        <form onSubmit={adduserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUsername}
            ref={inputUsername}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={Number(enteredAge)}
            onChange={ageEnteredHandler}
            ref={inputAge}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;


