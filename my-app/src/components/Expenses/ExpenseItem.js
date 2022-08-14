import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import React from "react";

const curday = (sp) => {
  let today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return mm + sp + dd + sp + yyyy;
};
function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate value={curday(`/`)} date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.price}лв.</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
