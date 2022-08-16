import "./Chartbar.css";

const ChartBar = ({ value, maxValue, label }) => {
  let barfillHeight = `0%`;
  let maxVal = Number(maxValue);
  let val = Number(value);

  if (maxVal > 0) {
    barfillHeight = Math.round((val / maxVal) * 100);
  }
  // console.log(barfillHeight)
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barfillHeight + `%` }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
