// import React from "react";
// import { useEffect } from "react";
// import useFetch from "./utils/customHoooks/useFetch";
// import useCoords from "./utils/customHoooks/useCoords";
import Homepage from "./pages/Homepage";
// import { useAppSelector } from "./utils/redux-store/hooks";
import useCoords from "./utils/customHoooks/useCoords";

// import { useGetCurrentWeatherQuery } from "./utils/redux-store/weatherApi";

function App() {
  // const coords = useAppSelector((state) => state.weather.coords);
  // console.log(coords);
  useCoords();

  // const { data, isLoading, error } = useGetCurrentWeatherQuery();

  // console.log(data);

  return (
    <div className="font-barlow font-normal text-base text-slate-700 min-h-screen bg-slate-50 py-10">
      <Homepage />
    </div>
  );
}

export default App;
