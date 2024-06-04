// import React from "react";

function WeatherResults() {
  // const { data, isLoading, error } = useFetch("weather");
  // console.log(data);

  const currentWeather = localStorage.getItem("currentWeather");

  if (currentWeather) {
    console.log(JSON.parse(currentWeather));
  }
  return (
    <div className="flex-1 p-5 rounded-md flex-shrink-0 shadow-md shadow-slate-100 min-h-28">
      weather results
    </div>
  );
}

export default WeatherResults;
