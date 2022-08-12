import "./ExpenseForm.css";
import { useState } from "react";
import App from "../../App";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(``);
  const [enteredAmount, setEnteredAmount] = useState(``);
  const [enteredDate, setEnteredDate] = useState(``);
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    if (
      expenseData.title !== "" &&
      expenseData.amount !== "" &&
      expenseData.date !== ""
    ) {
      setEnteredTitle(``);
      setEnteredAmount(``);
      setEnteredDate(``);

      props.onSaveData(expenseData);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            step="2024-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div>
          <button type="submit">Add New Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
