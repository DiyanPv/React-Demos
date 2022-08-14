import "./ExpenseFilter.css";
import { useState } from "react";

const ExpenseFilter = (props) => {
  let lastyear = `2022`;
  const [year, setYear] = useState(lastyear);

  const dropDownChangeHandler = (event) => {
    const yearvar = event.currentTarget.value;
    console.log(`before ${lastyear}`);
    setYear(yearvar);
    props.onChangeFilter(yearvar);
    console.log(`after ${year}`);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={year} onChange={dropDownChangeHandler}>
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
