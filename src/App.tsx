// import React from "react";
// import { useEffect } from "react";
// import useFetch from "./utils/customHoooks/useFetch";
// import useCoords from "./utils/customHoooks/useCoords";
import Homepage from "./pages/Homepage";
import { useAppSelector } from "./utils/redux-store/hooks";
import useCoords from "./utils/customHoooks/useCoords";

import { useGetCurrentWeatherQuery } from "./utils/redux-store/weatherApi";
import { useEffect, useState } from "react";

function App() {
  useCoords();
  const [skip, setSkip] = useState(true);
  const coords = useAppSelector((state) => state.weather.coords);
  // console.log(coords, "current coords");

  const { data, refetch } = useGetCurrentWeatherQuery(undefined, { skip });

  console.log(data);

  useEffect(() => {
    if (coords.lat && coords.lon) {
      if (skip) {
        setSkip(false);
      }

      if (!skip) {
        refetch();
      }
    }
  }, [coords.lat, coords.lon, skip, refetch]);

  // useEffect(()=>{})

  //
  return (
    <div className="font-barlow font-normal text-base text-slate-700 min-h-screen bg-slate-50 py-10">
      <Homepage />
    </div>
  );
}

export default App;

// useEffect(() => {
//   const getData = async function () {
//     const req = await fetch(

//     );

//     const res = await req.json();
//     console.log(res);
//   };

//   getData();
// }, []);

// i wnat to fetch data on condition, RTK supports conditional fetching by using skip paramter in the hook

// i want to use this feature because intially the coords lat and lon are set to zero

// i'm using useCoords hook to read coords and update the redux strore

// i want to fetch data only when coords data is available to if i'm planningon useing skip parameter, read coords data from redux store, useEffect to make sure coords are available and make skip to false by updating state

// but the issue is query doesn't accept any initial value, how to add skip parameter to this?

// do you suggest any alternative method to achieve similar results?
//  const { data, refetch } = useGetCurrentWeatherQuery();

// see this query fetch hook needs no parameters to fetch data but i want to add skip parameter how?
