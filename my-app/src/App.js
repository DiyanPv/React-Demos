import DemoExpense from "./components/Expenses/DemoExpense";
import NewExpense from "./components/NewExpenseInput/NewExpense";
function App() {
  const addExpenseHandler = (expense) => {
    expenses.push({
      title: expense.title,
      price: expense.amount,
      date: new Date(expense.date),
    });
    console.log(expenses);
  };
  const expenses = [];

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
