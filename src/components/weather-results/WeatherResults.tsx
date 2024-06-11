// import React from "react";
import CurrentWeatherOverview from "./CurrentWeatherOverview";
import HourlyWeatherGraph from "./HourlyWeatherGraph";

function WeatherResults() {
  return (
    <div className="flex-1 p-5 rounded-md flex-shrink-0 shadow-md shadow-stone-100 min-h-28">
      <CurrentWeatherOverview />
      <HourlyWeatherGraph />
    </div>
  );
}

export default WeatherResults;
