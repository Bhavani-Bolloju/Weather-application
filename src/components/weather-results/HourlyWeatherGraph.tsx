// import { useRef, useEffect } from "react";
import AreaGraph from "./AreaGraph";
import { HourlyDataProp } from "../../utils/types/types";

// const data = [
//   {
//     id: "Dataset 1",
//     data: [
//       { x: "2020-01-01", y: 30 },
//       { x: "2020-02-01", y: 50 },
//       { x: "2020-03-01", y: 25 },
//       { x: "2020-04-01", y: 70 },
//       { x: "2020-05-01", y: 30 },
//       { x: "2020-06-10", y: 10 },
//       { x: "2020-08-01", y: 35 },
//       { x: "2020-09-01", y: 20 },
//       { x: "2020-10-01", y: 40 },
//       { x: "2020-11-01", y: 12 },
//       { x: "2020-12-01", y: 30 }
//     ]
//   }
//   // {
//   //   id: "Dataset 2",
//   //   data: [
//   //     { x: "2020-01-01", y: 20 },
//   //     { x: "2020-02-01", y: 50 },
//   //     { x: "2020-03-01", y: 45 },
//   //     { x: "2020-04-01", y: 30 },
//   //     { x: "2020-05-01", y: 65 }
//   //   ]
//   // }
// ];

//nivo
function HourlyWeatherGraph() {
  let weatherData;

  const storedData = localStorage.getItem("onecall");

  if (storedData) {
    weatherData = JSON.parse(storedData);
  }

  const first24Hrs = weatherData?.hourly
    ?.slice(0, 24)
    .filter((_: unknown, i: number) => i % 2);

  const filteredData = first24Hrs?.map((data: HourlyDataProp) => {
    return { x: data.dt, y: data.temp };
  });

  const formatData = [
    {
      id: "Dataset 1",
      data: filteredData
    }
  ];

  return (
    <div style={{ height: 280, width: "98%" }} className="mt-10">
      {formatData && <AreaGraph data={formatData} />}
    </div>
  );
}

export default HourlyWeatherGraph;
