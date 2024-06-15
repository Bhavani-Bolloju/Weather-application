// import React from "react";
import { format } from "date-fns";
import { DayWeatherProp } from "../../utils/types/types";
import { Slide } from "pure-react-carousel";

function DayWeather({
  dt,
  minTemp,
  maxTemp,
  description,
  iconCode,
  index
}: DayWeatherProp) {
  const date = new Date(dt * 1000);
  const present = new Date().getDay();
  const day = date.getDay();
  let dateFormat = format(date, "EEE");
  if (present - 1 === day) dateFormat = "yesterday";
  if (present === day) dateFormat = "today";
  if (present + 1 === day) dateFormat = "tomorrow";
  return (
    <Slide index={index}>
      <div className="min-w-[180px] w-fit bg-white border border-slate-200 rounded-md p-5 shadow-md shadow-slate-50 bg-gradient-to-tr from-white to-slate-50">
        <span className="capitalize text-slate-500 font-medium text-lg block text-center">
          {dateFormat}
        </span>
        <div className="flex items-center -ml-3">
          <img
            className="cover w-[100px]"
            src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt=""
          />
          <div className="flex flex-col justify-between text-[14px] h-full text-slate-600 gap-2 font-medium">
            <span>
              {minTemp}&deg;
              <span>C</span>
            </span>
            <span>
              {maxTemp}&deg;
              <span>C</span>
            </span>
          </div>
        </div>
        <div className="text-base text-slate-700 font-normal capitalize text-center text-wrap">
          {description}
        </div>
      </div>
    </Slide>
  );
}

export default DayWeather;
