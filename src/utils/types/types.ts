// import { omit } from "utility-types";

export interface DataPoint {
  x: string;
  y: number;
}

export interface Dataset {
  id: string;
  data: DataPoint[];
}

export interface WeatherProp {
  id: number;
  icon: string;
  description: string;
  main: string;
}

export interface HourlyDataProp {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  temp: number;
  uvi: number;
  visibility: number;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
  weather: WeatherProp[];
}

export interface DayWeatherProp {
  minTemp: number;
  maxTemp: number;
  description: string;
  iconCode: string;
  dt: number;
  index: number;
}

export interface DailyDataProp
  extends Omit<HourlyDataProp, "temp" | "feels_like" | "visibility"> {
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  temp: {
    day: number;
    min: number;
    max: number;
    morn: number;
    night: number;
  };
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  visibility?: number;
}
