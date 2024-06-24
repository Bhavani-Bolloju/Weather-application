// import React from 'react'
import { ResponsiveLine } from "@nivo/line";

import { Dataset } from "./HourlyWeatherGraph";

import { format } from "date-fns";

interface AreaGraphProp {
  data: Dataset[];
}

const CustomTooltip = function ({ point }) {
  const date = new Date(+point.data.xFormatted * 1000);
  const formatDate = format(date, "hh:mm aaa");
  return (
    <div className="border-1 rounded-md text-sm font-barlow bg-white border-2 border-slate-200 text-slate-600 px-3 py-2">
      <span className="font-medium">Time - </span>
      <span className="uppercase mb-1 inline-block">{formatDate}</span>
      <br />
      <span className="font-medium">Temp - </span>
      <span>{point.data.yFormatted}&deg; C</span>
    </div>
  );
};

function AreaGraph({ data }: AreaGraphProp) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, left: 20, bottom: 50, right: 50 }}
      xScale={{
        type: "point"
      }}
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
      // axisBottom={{
      //   format: function (value) {
      //     const dateFormat = new Date(value * 1000);
      //     return format(dateFormat, "hh:mm aaa");
      //   },

      //   legend: "Time",
      //   legendOffset: 40,
      //   legendPosition: "middle",
      //   tickPadding: 5,
      //   tickRotation: 0,
      //   tickSize: 6,
      //   truncateTickAt: 0
      // }}
      axisBottom={null}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor="#94a3b8"
      enableArea={true}
      pointLabelYOffset={-12}
      areaBlendMode="normal"
      areaOpacity={0.9}
      useMesh={true}
      lineWidth={2}
      enablePointLabel={true}
      pointLabel={(d) => {
        return `${d.data.y}`;
      }}
      tooltip={CustomTooltip}
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

      defs={[
        {
          id: "gradientA",
          type: "linearGradient",
          colors: [
            { offset: 0, color: "#cbd5e1" },
            { offset: 100, color: "#f8fafc" }
          ]
        }
      ]}
      fill={[{ match: "*", id: "gradientA" }]}
      colors={["#94a3b8", "#1d3557"]}
      theme={{
        dots: {
          text: {
            fill: "#64748b",
            fontSize: 12,
            fontWeight: 500,
            fontFamily: "Barlow"
          }
        }
      }}
    />
  );
}

export default AreaGraph;
