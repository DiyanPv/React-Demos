import "./ExpenseFilter.css";
import { useState } from "react";

const ExpenseFilter = (props) => {
  let lastyear = `2023`;
  const [year, setYear] = useState(lastyear);

  const dropDownChangeHandler = (event) => {
    const yearvar = event.currentTarget.value;
    setYear(yearvar);
    props.onChangeFilter(yearvar);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={year} onChange={dropDownChangeHandler}>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
