import "./DemoExpense.css";

import ExpenseItem from "./ExpenseItem";
function DemoExpense(props) {
  return (
    <div className="expenses">
      {props.items.map((el) => (
        <div>{ExpenseItem(el)}</div>
      ))}
    </div>
  );
}
export default DemoExpense;
