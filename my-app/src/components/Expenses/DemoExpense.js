import "./DemoExpense.css";
import ExpenseFilter from "../Filter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

import { useState } from "react";
import ExpensesChart from "../Chart/FinalChartComponent";
function DemoExpense(props) {
  const [year, setYear] = useState(`2022`);

  const filteredArr = props.items.filter(
    (el) => el.date.getFullYear() === Number(year)
  );

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  let expensesContent = <p>No expenses found.</p>;
  if (filteredArr.length > 0) {
    expensesContent = filteredArr.map((el) => (
      <ExpenseItem
        key={el.id}
        title={el.title}
        date={el.date}
        price={el.price}
      ></ExpenseItem>
    ));
  }
  return (
    <div className="filteredExpenses__and__sortbymonth">
      <ExpensesChart></ExpensesChart>
      <div className="expenses">
        <ExpenseFilter selected={year} onChangeFilter={filterChangeHandler} />

        {expensesContent}
      </div>
    </div>
  );
}
export default DemoExpense;
