import Chart from "./Chart";

const ExpensesChart = ({ filteredArr }) => {
  let monthsArray = [
    { label: `Jan`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Feb`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Mar`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Apr`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `May`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Jun`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Jul`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Aug`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Sep`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Oct`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Nov`, value: 0, id: "0000" + Math.random() + Math.random() },
    { label: `Dec`, value: 0, id: "0000" + Math.random() + Math.random() },
  ];
  for (let line of filteredArr) {
const date = line.date.getMonth()
monthsArray[date].value +=  line.price;
  }

  return <Chart dataPoints={monthsArray} />;
};

export default ExpensesChart;
