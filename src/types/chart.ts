export type optionType = {
  dataZoom?: {
    [key: string]: string | boolean | Number;
  }[];
  title?: {
    text?: string;
    left?: string;
  };
  xAxis: {
    type: string;
    data: number[];
    name: string;
    nameTextStyle?: {
      [key: string]: string | number | object;
    };
  };
  yAxis: {
    name: string;
    type: string;
  };
  visualMap?: {
    min: number;
    max: number;
    dimension: number;
    orient: string;
    right: string;
    top: string;
    text: string[];
    calculable: boolean;
    inRange: {
      color: string[];
    };
  };
  series: {
    data: number[] | string[];
    type: string;
  }[];
};
