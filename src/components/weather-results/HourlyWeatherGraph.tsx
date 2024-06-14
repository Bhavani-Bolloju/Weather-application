// import { useRef, useEffect } from "react";
import AreaGraph from "./AreaGraph";

export interface DataPoint {
  x: string;
  y: number;
}

export interface Dataset {
  id: string;
  data: DataPoint[];
}

const data = [
  {
    id: "Dataset 1",
    data: [
      { x: "2020-01-01", y: 30 },
      { x: "2020-02-01", y: 50 },
      { x: "2020-03-01", y: 25 },
      { x: "2020-04-01", y: 70 },
      { x: "2020-05-01", y: 30 },
      { x: "2020-06-10", y: 10 },
      { x: "2020-08-01", y: 35 },
      { x: "2020-09-01", y: 20 },
      { x: "2020-10-01", y: 40 },
      { x: "2020-11-01", y: 12 },
      { x: "2020-12-01", y: 30 }
    ]
  }
  // {
  //   id: "Dataset 2",
  //   data: [
  //     { x: "2020-01-01", y: 20 },
  //     { x: "2020-02-01", y: 50 },
  //     { x: "2020-03-01", y: 45 },
  //     { x: "2020-04-01", y: 30 },
  //     { x: "2020-05-01", y: 65 }
  //   ]
  // }
];

//nivo
function HourlyWeatherGraph() {
  let weatherData;

  const storedData = localStorage.getItem("onecall");

  if (storedData) {
    weatherData = JSON.parse(storedData);
  }

  const first24Hrs = weatherData?.hourly
    ?.slice(0, 24)
    .filter((datapoint, i: number) => i % 2);

  const filterData = first24Hrs?.map((el, i) => {
    return { x: el.dt, y: el.temp };
  });

  const formatData = [
    {
      id: "Dataset 1",
      data: filterData
    }
  ];
  console.log(filterData);
  console.log(data);
  return (
    <div style={{ height: 300, width: "100%" }}>
      {formatData && <AreaGraph data={formatData} />}
    </div>
  );
}

export default HourlyWeatherGraph;

//draw chat

// useEffect(() => {
//   const svg = select(svgRef.current);

//   console.log(svg, "svg");

//   //scales
//   const xScale = scaleLinear()
//     .domain([0, data.length - 1])
//     .range([0, 300]);

//   const yScale = scaleLinear().domain([0, 100]).range([100, 0]);

//   //axes

//   const xAxis = axisBottom(xScale).ticks(data.length);
//   svg.select(".x-axis").style("transform", "translateY(100px)").call(xAxis);

//   const yAxis = axisLeft(yScale);
//   svg.select(".y-axis").style("transform", "translateX(0px)").call(yAxis);

//   //line-generator

//   const myLine = line()
//     .x((d, i) => xScale(i))
//     .y((d) => yScale(d.y))
//     .curve(curveCardinal);

//   //draw line
//   svg
//     .selectAll(".line")
//     .data([data])
//     .join("path")
//     .attr("class", "line")
//     .attr("d", myLine)
//     .attr("fill", "none")
//     .attr("stroke", "#00bfa6");
// }, []);
