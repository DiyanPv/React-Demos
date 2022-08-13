import "./DemoExpense.css";
import ExpenseFilter from "../Filter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
function DemoExpense(props) {
  const [year, setYear] = useState(`2022`);
  const filteredArr = props.items.filter(
    (el) => (el.date.getFullYear()) === Number(year)
  );


  return (
    <div className="expenses">
      <ExpenseFilter selected={year} />
      {filteredArr.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          date={el.date}
          price={el.price}
        ></ExpenseItem>
      ))}
    </div>
  );
}
export default DemoExpense;