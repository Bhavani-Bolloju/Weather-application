import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrentWeather } from "../types/types";
// import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/"
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<
      CurrentWeather,
      { lat: number; lon: number }
    >({
      query: (args) => {
        const { lat, lon } = args;
        return `onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily,minutely,alerts&appid=363c423f8d11223f86fa7bd54b3f93b9`;
      }
    })
  })
});

export const { useGetCurrentWeatherQuery } = weatherApi;
