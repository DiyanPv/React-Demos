import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData, prop) => {

    const expenseData = {
      ...enteredExpenseData,
    };
    props.onReceiveItem(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveExpenseDataHandler} setIsVisible={setIsVisible} isVisible={isVisible} />
    </div>
  );
};

export default NewExpense;
