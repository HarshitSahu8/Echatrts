import React from "react";
import ReactECharts from "echarts-for-react";
import { optionType } from "../../types/chart";
import "./styles.css";

type ChartProps = {
  options: optionType;
};

const Chart: React.FC<ChartProps> = ({ options, ...props }) => {
  return (
    <div className="chart-container">
      <ReactECharts
        option={options}
        className="chart"
        opts={{ renderer: "svg" }}
        {...props}
      />
    </div>
  );
};

export default Chart;
