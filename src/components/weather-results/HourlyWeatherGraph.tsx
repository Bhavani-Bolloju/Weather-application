// import { useRef, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";

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
      { x: "2020-07-01", y: 55 }
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

// import {
//   select,
//   line,
//   curveCardinal,
//   scaleLinear,
//   axisBottom,
//   axisLeft
// } from "d3";
// import * as d3 from "d3";

// function HourlyWeatherGraph() {
//   //defining ref
//   const svgRef = useRef();

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);
//     const width = 800;
//     const height = 200;
//     const margin = { top: 20, right: 30, bottom: 30, left: 40 };

//     // Example data
//     const data = [
//       { date: new Date(2020, 0, 1), value: 30 },
//       { date: new Date(2020, 1, 1), value: 40 },
//       { date: new Date(2020, 2, 1), value: 35 },
//       { date: new Date(2020, 3, 1), value: 50 },
//       { date: new Date(2020, 4, 1), value: 55 }
//     ];

//     // Set up scales
//     const xScale = d3
//       .scaleTime()
//       .domain(d3.extent(data, (d) => d.date))
//       .range([margin.left, width - margin.right]);

//     const yScale = d3
//       .scaleLinear()
//       .domain([0, d3.max(data, (d) => d.value)])
//       .nice()
//       .range([height - margin.bottom, margin.top]);

//     // Set up area generator
//     const area = d3
//       .area()
//       .x((d) => xScale(d.date))
//       .y0(height - margin.bottom)
//       .y1((d) => yScale(d.value))
//       .curve(d3.curveMonotoneX);

//     // Clear the SVG
//     svg.selectAll("*").remove();

//     // Create axes
//     svg
//       .append("g")
//       .attr("transform", `translate(0,${height - margin.bottom})`)
//       .call(
//         d3
//           .axisBottom(xScale)
//           .ticks(width / 80)
//           .tickSizeOuter(0)
//       );

//     svg
//       .append("g")
//       .attr("transform", `translate(${margin.left},0)`)
//       .call(d3.axisLeft(yScale));

//     // Append the area to the SVG
//     svg.append("path").datum(data).attr("fill", "steelblue").attr("d", area);

//     // Append the line to the SVG
//     svg
//       .append("path")
//       .datum(data)
//       .attr("fill", "none")
//       .attr("stroke", "gray")
//       .attr("stroke-width", 2)
//       .attr("d", area);

//     // Append circles for each data point
//     svg
//       .selectAll("circle")
//       .data(data)
//       .enter()
//       .append("circle")
//       .attr("cx", (d) => xScale(d.date))
//       .attr("cy", (d) => yScale(d.value))
//       .attr("r", 4)
//       .attr("fill", "black");

//     // Tooltip setup
//     const tooltip = d3
//       .select("body")
//       .append("div")
//       .attr("class", "tooltip")
//       .style("position", "absolute")
//       .style("visibility", "hidden")
//       .style("background", "#fff")
//       .style("padding", "5px")
//       .style("border", "1px solid #ccc")
//       .style("border-radius", "5px");

//     // Tooltip interactivity
//     svg
//       .selectAll("circle")
//       .on("mouseover", (event, d) => {
//         tooltip
//           .style("visibility", "visible")
//           .text(`Date: ${d.date.toLocaleDateString()} - Value: ${d.value}`);
//       })
//       .on("mousemove", (event) => {
//         tooltip
//           .style("top", `${event.pageY - 10}px`)
//           .style("left", `${event.pageX + 10}px`);
//       })
//       .on("mouseout", () => {
//         tooltip.style("visibility", "hidden");
//       });
//   }, []);

//   return (
//     <div className="flex items-center justify-center  w-full mt-5">
//       <svg className="w-full" ref={svgRef} width={800} height={300}></svg>;
//     </div>
//   );
// }

//nivo
function HourlyWeatherGraph() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, left: 50, bottom: 50, right: 50 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          precision: "day",
          useUTC: false
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{ type: "linear", stacked: false, min: 0, max: "auto" }}
        curve="natural"
        // axisLeft={{
        //   legend: "Value",
        //   legendPosition: "middle",
        //   tickPadding: 7,
        //   tickRotation: 0,
        //   truncateTickAt: 15,
        //   legendOffset: -45,
        //   tickSize: 5
        // }}
        axisLeft={null}
        axisBottom={{
          format: "%b %d",
          tickValues: "every 1 month",
          legend: "Date",
          legendOffset: 30,
          legendPosition: "middle",
          truncateTickAt: 0,
          tickPadding: 0,
          tickRotation: 0
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: "accent" }}
        pointSize={8}
        pointColor={{ from: "color" }}
        pointBorderWidth={2}
        pointBorderColor={{ theme: "background" }}
        enableArea={true}
        pointLabelYOffset={-10}
        areaBlendMode="normal"
        areaOpacity={0.3}
        useMesh={true}
        lineWidth={2}
        enablePointLabel={true}
        tooltip={({ point }) => (
          <div>
            <strong>Date:</strong> {point.data.xFormatted}
            <br />
            <strong>Value:</strong> {point.data.yFormatted}
          </div>
        )}
        motionConfig="wobbly"
        // legends={[
        //   {
        //     anchor: "right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 123,
        //     translateY: 34,
        //     itemsSpacing: 5,
        //     itemDirection: "left-to-right",
        //     itemWidth: 92,
        //     itemHeight: 18,
        //     itemOpacity: 0.75,
        //     symbolSize: 8,
        //     symbolShape: "circle",
        //     symbolBorderColor: "rgba(0, 0, 0, .5)",
        //     effects: [
        //       {
        //         on: "hover",
        //         style: {
        //           itemBackground: "rgba(0, 0, 0, .03)",
        //           itemOpacity: 1
        //         }
        //       }
        //     ]
        //   }
        // ]}
      />
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
