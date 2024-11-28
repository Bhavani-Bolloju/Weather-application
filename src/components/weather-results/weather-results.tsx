// import React from "react";
import CurrentWeatherOverview from './current-weather-overview'
import HourlyWeatherGraph from './hourly-weather-graph'
import DailyWeatherDetails from './daily-weather-details'

// import { useAppSelector } from "../../utils/redux-store/hooks";

function WeatherResults() {
   // const coords = useAppSelector((state) => state.weather.coords);
   // console.log(coords, "coords");

   return (
      <div className="flex-1 p-5 rounded-md flex-shrink-0 shadow-md shadow-stone-100 min-h-28">
         <CurrentWeatherOverview />
         <HourlyWeatherGraph />
         <DailyWeatherDetails />
      </div>
   )
}

export default WeatherResults
