import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setUserName] = useState(``);
  const [enteredAge, setAge] = useState(``);
  const [error, setError] = useState();
  const adduserHandler = (e) => {
    e.preventDefault();
    let age = Number(enteredAge);

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non empty values)",
      });
      return;
    }
    if (age < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (>0)!",
      });
      return;
    }

    onAddUser(enteredUsername, age);
  };

  const errorHandler = () => {
    setError(null);
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
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
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={Number(enteredAge)}
            onChange={ageEnteredHandler}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
