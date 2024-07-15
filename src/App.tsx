// import React from "react";
// import { useEffect } from "react";
// import useFetch from "./utils/customHoooks/useFetch";
// import useCoords from "./utils/customHoooks/useCoords";
import Homepage from "./pages/Homepage";
import useCoords from "./utils/customHoooks/useCoords";

// import { useAppSelector } from "./utils/redux-store/hooks";
// import { useGetCurrentWeatherQuery } from "./utils/redux-store/weatherApi";
// import { useEffect, useState } from "react";

function App() {
  useCoords();
  // const [skip, setSkip] = useState(true);
  // const coords = useAppSelector((state) => state.weather.coords);

  // const { data } = useGetCurrentWeatherQuery(undefined, {
  //   skip
  // });

  // // console.log(data);

  // useEffect(() => {
  //   if (coords.lat && coords.lon) {
  //     if (skip) {
  //       setSkip(false);
  //     }
  //   }
  // }, [coords.lat, coords.lon, skip]);

  return (
    <div className="font-barlow font-normal text-base text-slate-700 min-h-screen bg-slate-50 py-10">
      <Homepage />
    </div>
  );
}

export default App;
