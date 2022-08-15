import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  return (<div className="chart">
{dataPoints.map(datapoint=> <ChartBar key={datapoint.key} label={datapoint.label}></ChartBar>)}
  </div>);
};

export default Chart;
