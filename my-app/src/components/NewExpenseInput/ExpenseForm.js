import "./ExpenseForm.css";
import { useState } from "react";

let expenseData;
const ExpenseForm = (props) => {
  const [title, setTitle] = useState(``);
  const [amount, setAmount] = useState(``);
  const [date, setDate] = useState(``);
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    if (
      expenseData.title !== "" &&
      expenseData.amount !== "" &&
      expenseData.date !== ""
    ) {
      setTitle(``);
      setAmount(``);
      setDate(``);

      props.onSaveData(expenseData);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            step="2024-12-31"
            onChange={dateChangeHandler}
            value={date}
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
