import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  const changeTitle = () => {
    const newTitle = `New Title Static`;
    setTitle(newTitle);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
