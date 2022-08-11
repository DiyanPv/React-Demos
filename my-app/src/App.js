import { useEffect, useState } from "react";
import DemoExpense from "./components/DemoExpense";

function App() {

  const expenses = [
    {
      id: `el`,
      title: `Mercedes CLS`,
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: `el`,
      title: `Hyundai Terracan`,
      price: 231.12,
      date: new Date(2022, 7, 22),
    },
    {
      id: `el`,
      title: `BMW E46`,
      price: 35,
      date: new Date(2019, 2, 19),
    },
    {
      id: `el`,
      title: `BMW E60`,
      price: 1100,
      date: new Date(2012, 2, 19),
    },
  ];

 
  return (
    <div>
      <h2 className="title-document">Expense Tracker DEMO</h2>
      <DemoExpense items={expenses} />
    </div>
  );
}
export default App;
