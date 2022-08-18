import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [enteredUsername, setUserName] = useState(``);
  const [enteredAge, setAge] = useState(``);
  const adduserHandler = (e) => {
    e.preventDefault();
    let age = Number(enteredAge);

    if(enteredUsername.trim().length ===0 || enteredAge.trim().length ===0){
      return
    }
    if(age < 1){
      
    }
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageEnteredHandler = (event) => {
    setAge(event.target.value);
  };
  return (
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
  );
};

export default AddUser;
