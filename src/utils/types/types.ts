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
