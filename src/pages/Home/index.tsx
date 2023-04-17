import Charts from "../../Components/Charts";
import { alcoholData } from "../../data/chart";
import { optionType } from "../../types/chart";
// add styles.css file
import "./styles.css";

type optionDataType = {
  Alcohol: number;
  "Malic acid": number;
  items: number;
};

const Home = () => {
  const xAxis = alcoholData.map((item) => Number(item["Color intensity"]));
  const yAxis = alcoholData.map((item) => item["Hue"]);

  const optionScattered: optionType = {
    title: {
      text: "Scattered chart",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: xAxis,
      name: "Color intensity",
      nameTextStyle: {
        align: "right",
        verticalAlign: "top",
        padding: [30, 0, 0, 0],
      },
    },
    yAxis: {
      name: "Hue",
      type: "value",
    },
    visualMap: {
      min: Math.min.apply(Math, xAxis),
      max: Math.max.apply(Math, xAxis),
      dimension: 1,
      orient: "horizontal",
      right: "center",
      top: "bottom",
      text: ["HIGH", "LOW"],
      calculable: true,
      inRange: {
        color: ["#f2c31a", "#24b7f2"],
      },
    },
    series: [
      {
        data: yAxis,
        type: "scatter",
      },
    ],
  };

  const optionData: optionDataType[] = [];

  for (const element of alcoholData) {
    if (
      optionData.find(
        (item: optionDataType) => item["Alcohol"] === element["Alcohol"]
      )
    ) {
      let index = optionData.findIndex(
        (item: optionDataType) => item["Alcohol"] === element["Alcohol"]
      );
      optionData[index]["Malic acid"] += Number(element["Malic Acid"]);
      optionData[index]["items"] += 1;
    } else {
      optionData.push({
        Alcohol: Number(element["Alcohol"]),
        "Malic acid": Number(element["Malic Acid"]),
        items: 1,
      });
    }
  }

  const optionBar: optionType = {
    dataZoom: [
      {
        show: true,
        start: 94,
        end: 100,
      },
      {
        type: "inside",
        start: 94,
        end: 100,
      },
      {
        show: true,
        yAxisIndex: 0,
        filterMode: "empty",
        width: 30,
        height: "80%",
        showDataShadow: false,
        left: "93%",
      },
    ],
    title: {
      text: "Bar chart",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: optionData.map((item: optionDataType) => item["Alcohol"]),
      name: "Alcohol",
      nameTextStyle: {
        align: "right",
        verticalAlign: "top",
        padding: [30, 0, 0, 0],
      },
    },
    yAxis: {
      name: "Malic acid",
      type: "value",
    },
    series: [
      {
        data: optionData.map((item) => item["Malic acid"] / item["items"]),
        type: "bar",
      },
    ],
  };

  return (
    <div className="wrapper">
      <h1 className="title">ECharts for React</h1>
      <Charts options={optionScattered} />
      <Charts options={optionBar} />
    </div>
  );
};

export default Home;
