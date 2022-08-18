import React from "react";

import styles from "./IndividualUser.module.css";

const IndividualUser = ({ name, age }) => {
  const deleteButtonHandler = (e) => {
    console.log(e.target.parentNode);
  };
  return (
    <li className={styles.user}>
      {name} is {age} years old
      <button class={styles.deletebtn} onClick={deleteButtonHandler}>
        Delete
      </button>
    </li>
  );
};

export default IndividualUser;
