// import React from 'react'
import Skeleton from "react-loading-skeleton";
import sunrise from "../../assets/sunrise.svg";
import sunset from "../../assets/sunset.svg";
import wind from "../../assets/wind.svg";
import humidity from "../../assets/humidity.svg";
import temperature from "../../assets/temperature.svg";
import { format } from "date-fns";
import useFetch from "../../utils/customHoooks/useFetch";

interface SunriseSunsetCardProps {
  icon: string;
  value: number;
  title: string;
}

interface WindHumidityCardProps {
  icon: string;
  value: string;
  title: string;
}

const SunriseSunsetCard = function ({
  icon,
  value,
  title
}: SunriseSunsetCardProps) {
  const date = new Date(value);

  const formatTime = format(date, "hh:mm aaa");

  return (
    <div>
      <div className="flex items-center justify-center ">
        <img src={icon} alt={title} className="w-[25px]  h-[28px]" />
        <p className="text-slate-500 capitalize font-medium">{title}</p>
      </div>
      <p className="text-slate-600 font-medium ml-2 capitalize mt-[-2px]">
        {formatTime}
      </p>
    </div>
  );
};

const WindHumidityCard = function ({
  icon,
  title,
  value
}: WindHumidityCardProps) {
  return (
    <div className="flex flex-col justify-start">
      <div className="flex items-center gap-[2px]">
        <img src={icon} alt={title} />
        <p className="text-slate-500 capitalize font-medium leading-1">
          {title}
        </p>
      </div>
      <div className="font-medium text-slate-600 ml-1">
        <span className="text-lg">{value}</span>
        {title === "wind" && (
          <span className="ml-[2px] text-slate-500">m/s</span>
        )}
        {title === "humidity" && (
          <span className="ml-[2px] text-slate-500">%</span>
        )}
      </div>
    </div>
  );
};

function CurrentWeatherOverview() {
  // const { data, isLoading, error } = useFetch("weather");

  // localStorage.setItem("currentWeather", JSON.stringify(data));

  const currentWeather = localStorage.getItem("currentWeather");
  let data;
  if (currentWeather) {
    data = JSON.parse(currentWeather);
  }

  console.log(data);
  const isLoading = false;

  console.log(data?.weather);
  console.log(data);

  // https://openweathermap.org/img/wn/10d@2x.png

  return (
    <div className="flex flex-row justify-between">
      <div className="min-h-20">
        {isLoading && !data ? (
          <Skeleton height={230} width={320} borderRadius={5}></Skeleton>
        ) : (
          <div className="border-2 border-slate-100 shadow-lg shadow-slate-50 py-5 px-10 rounded-lg">
            <div className="flex justify-center gap-10">
              <div>
                <div className="flex items-center">
                  <div className="w-[70px] h-auto ml-[-20px]">
                    <img
                      src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
                      alt="weather icon"
                      width={45}
                      height={45}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="text-slate-700 font-medium flex">
                    <span className="text-3xl ml-[-5px]">
                      {data?.main?.temp}
                    </span>
                    <span className="text-lg align-top ml-[0.5px]">&deg;</span>
                    <span className="align-top text-xl flex items-baseline self-start text-slate-600 gap-[2px] ml-1 font-normal">
                      <button className="outline-none self-start">C</button>
                      <span className="w-[2px] h-4 bg-slate-400 self-center"></span>
                      <button className="outline-none self-start">F</button>
                    </span>
                  </div>
                </div>
                <div className="capitalize text-base text-slate-600 mt-[-10px]">
                  {data?.weather[0]?.description}
                </div>
                <div className="flex items-center gap-1 mt-2 font-medium">
                  <span>
                    <img src={temperature} alt="temperature" />
                  </span>
                  <span className="text-slate-600">Feels like - </span>
                  <span className="text-slate-500 flex items-start">
                    <span>{data?.main["feels_like"]}</span>
                    <span className="ml-[2px]">&deg;</span>
                    <span className="text-[14px] self-start">C</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <SunriseSunsetCard
                  icon={sunrise}
                  title="sunrise"
                  value={data?.sys?.sunrise}
                />
                <SunriseSunsetCard
                  icon={sunset}
                  title="sunset"
                  value={data?.sys?.sunset}
                />
              </div>
            </div>
            <div className="flex justify-between mt-4 p-2  rounded-md border-t-2">
              <WindHumidityCard
                icon={wind}
                title="wind"
                value={data?.wind?.speed}
              />
              <WindHumidityCard
                icon={humidity}
                title="humidity"
                value={data?.main?.humidity}
              />
            </div>
          </div>
        )}
      </div>
      <div className="basis-[40%]">
        <p>overview description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          consequatur non veniam voluptate assumenda, eveniet iste officiis
          natus delectus unde repellat magni ipsa recusandae harum nobis
          laboriosam adipisci aspernatur rem?
        </p>
      </div>
    </div>
  );
}

export default CurrentWeatherOverview;
