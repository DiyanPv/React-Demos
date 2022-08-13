import { useState } from "react";
import DemoExpense from "./components/Expenses/DemoExpense";
import NewExpense from "./components/NewExpenseInput/NewExpense";
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
    <div>
      <h2 className="title-document">Expense Tracker DEMO</h2>

      <NewExpense onReceiveItem={addExpenseHandler} />
      <DemoExpense items={expenses} />
    </div>
  );
}
export default App;

//title, day, price
