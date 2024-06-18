// import React from 'react'
import Skeleton from "react-loading-skeleton";
import sunrise from "../../assets/sunrise.svg";
import sunset from "../../assets/sunset.svg";
import wind from "../../assets/wind.svg";
import humidity from "../../assets/humidity.svg";
// import temperature from "../../assets/temperature.svg";

import WindHumidityCard from "../../utils/UI/WindHumidityCardProps";
import SunriseSunsetCard from "../../utils/UI/SunriseSunsetCard";
import { format } from "date-fns";
// import WeatherOverviewDescription from "./WeatherOverviewDescription";

// import useFetch from "../../utils/customHoooks/useFetch";

function CurrentWeatherOverview() {
  // const { data, isLoading, error } = useFetch("weather");
  // const { data, isLoading } = useFetch("onecall");
  // console.log(data);
  // console.log(data);

  // console.log(oneCalldata);

  // localStorage.setItem("currentWeather", JSON.stringify(data));
  // localStorage.setItem("onecall", JSON.stringify(data));

  const currentWeather = localStorage.getItem("onecall");
  let data;
  if (currentWeather) {
    data = JSON.parse(currentWeather);
  }
  //
  // // console.log(data);
  const isLoading = false;

  // console.log(data?.weather);
  // console.log(data);

  // https://openweathermap.org/img/wn/10d@2x.png

  return (
    <div className="flex justify-around">
      <div className="min-h-20">
        {isLoading && !data ? (
          <Skeleton height={230} width={320} borderRadius={5}></Skeleton>
        ) : (
          <div className="border-2 border-slate-100   py-5 px-10 rounded-lg">
            <div className="flex justify-center gap-14">
              <div>
                <div className="flex items-center">
                  <div className="w-[70px] h-auto ml-[-20px]">
                    <img
                      src={`https://openweathermap.org/img/wn/${data?.current?.weather[0]?.icon}@2x.png`}
                      alt="weather icon"
                      width={45}
                      height={45}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="text-slate-700 font-medium flex">
                    <span className="text-3xl ml-[-5px]">
                      {data?.current?.temp}
                    </span>
                    <span className="text-lg align-top ml-[0.5px]">&deg;</span>
                    <span className="align-top text-xl flex items-baseline self-start text-slate-600 gap-[2px] ml-1 font-normal">
                      <button className="outline-none self-start">C</button>
                      <span className="w-[2px] h-4 bg-slate-400 self-center"></span>
                      <button className="outline-none self-start">F</button>
                    </span>
                  </div>
                </div>
                <div className="capitalize text-base text-slate-600 mt-[-15px]">
                  {data?.current?.weather[0]?.description}
                </div>
                <div className="flex items-center gap-1 mt-3 font-medium">
                  <span className="text-slate-600">Feels like - </span>
                  <span className="text-slate-500 flex items-start">
                    <span>{data?.current?.["feels_like"]}</span>
                    <span className="ml-[2px]">&deg;</span>
                    <span className="text-[14px] self-start">C</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <SunriseSunsetCard
                  icon={sunrise}
                  title="sunrise"
                  value={data?.current?.sunrise}
                />
                <SunriseSunsetCard
                  icon={sunset}
                  title="sunset"
                  value={data?.current?.sunset}
                />
              </div>
            </div>
            <div className="flex justify-between mt-4 pt-5 p-2  border-t-2">
              <WindHumidityCard
                icon={wind}
                title="wind"
                value={data?.current?.["wind_speed"]}
              />
              <WindHumidityCard
                icon={humidity}
                title="humidity"
                value={data?.current?.humidity}
              />
            </div>
          </div>
        )}
      </div>
      <div className="basis-[40%] flex flex-col items-center mt-5">
        <div className="flex gap-1 text-slate-600 items-baseline">
          <span className="text-5xl ">
            {format(new Date(data?.current?.dt * 1000), "hh:mm")}
          </span>
          <span className="font-medium text-lg text-slate-500 uppercase">
            {format(new Date(data?.current?.dt * 1000), "aaa")}
          </span>
        </div>
        <div className="ml-2 mt-1 text-base font-medium text-slate-600">
          {format(new Date(data?.current?.dt * 1000), "ccc, PPP")}
        </div>
      </div>
    </div>
  );
}
{
  /* <WeatherOverviewDescription></WeatherOverviewDescription> */
}

export default CurrentWeatherOverview;
