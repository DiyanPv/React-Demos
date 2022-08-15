import { useState } from "react";

import DemoExpense from "./components/Expenses/DemoExpense";
import NewExpense from "./components/NewExpenseInput/NewExpense";
import ExpensesChart from "./components/Chart/FinalChartComponent";
const Expenses = [];
function App() {
  const [expenses, setExpenses] = useState(Expenses);

  const addExpenseHandler = (expense) => {
    let newobj = {
      title: expense.title,
      price: expense.amount,
      date: new Date(expense.date),
      id: "0000" + Math.random() + Math.random(),
    };
    setExpenses([newobj, ...expenses]);
  };

  return (
    <div className="defaultcontainer">
      <h2 className="title-document">Expense Tracker DEMO</h2>

      <NewExpense onReceiveItem={addExpenseHandler} />
      <ExpensesChart></ExpensesChart>
      <DemoExpense items={expenses} />
    </div>
  );
}
export default App;

//title, day, price
