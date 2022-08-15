import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ dataPoints }) => {
 const dataPointNums = dataPoints.map(el => Number(el.value));
 const biggestNum = Math.max(...dataPointNums)
  return (<div className="chart">
{dataPoints.map(datapoint=> <ChartBar key={datapoint.id} label={datapoint.label} value ={datapoint.value} maxValue={biggestNum}></ChartBar>)}
  </div>);
};

export default Chart;
