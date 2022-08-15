import "./Chartbar.css";

const ChartBar = ({ value, maxValue, key, label }) => {
  let barfillHeight = `0%`;
  console.log(value);
  if (maxValue > 0) {
    barfillHeight = Math.round(value / maxValue) * 100 + `%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
        <div className="chart-bar__label">{label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
