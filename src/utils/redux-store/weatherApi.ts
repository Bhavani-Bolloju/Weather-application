import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn
} from "@reduxjs/toolkit/query/react";
import { OnecallCurrentWeather } from "../types/types";
import { RootState } from "./store";

interface QueryProps {
  url: string;
  params: {
    exclude: string;
    appid: string;
  };
}

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.openweathermap.org/data/2.5/"
});

const baseURL = "https://api.openweathermap.org/data/2.5/";

`https://api.openweathermap.org/data/2.5/onecall?lat=17.4358528&lon=78.4400384&exclude=minutely,hourly,daily,alerts&units=metric&appid=363c423f8d11223f86fa7bd54b3f93b9`;

const customBaseQuery: BaseQueryFn<QueryProps, unknown, unknown> = async (
  args,
  api,
  extraOptions
) => {
  const state = api.getState() as RootState;

  const { coords, unit } = state.weather;

  const { lat, lon } = coords;

  let newArgs = args.url;

  const { url, params } = args;

  if (lat && lon) {
    if (typeof args === "string") {
      newArgs += `&lat=${lat}&lon=${lon}`;
    } else if (typeof args === "object") {
      const urlStr = new URL(baseURL);
      for (const param of Object.entries(params)) {
        const [key, value] = param;
        urlStr.searchParams.set(key, value as string);
      }

      urlStr.searchParams.set("lat", lat + "");
      urlStr.searchParams.set("lon", lon + "");
      urlStr.searchParams.set("units", unit);

      newArgs = url + urlStr.search;
    }
  }
  // console.log(newArgs);

  return baseQuery(newArgs, api, extraOptions);
};

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<OnecallCurrentWeather, void>({
      query: () => {
        return {
          url: "onecall",
          params: {
            exclude: "hourly,daily,minutely,alerts",
            appid: "363c423f8d11223f86fa7bd54b3f93b9"
          }
        };
      }
    })
  })
});

export const { useGetCurrentWeatherQuery } = weatherApi;

// baseQuery: fetchBaseQuery({
//   baseUrl: "https://api.openweathermap.org/data/2.5/"
// }),
