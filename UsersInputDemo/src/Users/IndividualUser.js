import React from "react";

import styles from "./IndividualUser.module.css";

const IndividualUser = ({ name, age }) => {
  return (
    <li className={styles.user}>
      {name} is {age} years old
    </li>
  );
};

export default IndividualUser;
