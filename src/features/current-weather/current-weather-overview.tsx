// import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import sunrise from '../../assets/sunrise.svg'
import sunset from '../../assets/sunset.svg'
import wind from '../../assets/wind.svg'
import humidity from '../../assets/humidity.svg'
// import temperature from "../../assets/temperature.svg";

import WindHumidityCard from '@components/ui/wind-humidity-card-props'
import SunriseSunsetCard from '@components/ui/sunrise-sunset-card'
import CurrentTemperature from './current-temperature'

import { format } from 'date-fns'
// import { useAppDispatch, useAppSelector } from '../../utils/redux-store/hooks'
// import { setUnit } from '../../utils/redux-store/weatherSlice'
// import { weatherApi } from '../../utils/redux-store/weatherApi'
// import { useGetCurrentWeatherQuery } from '../../utils/redux-store/weatherApi'

// import { useGetCurrentWeatherQuery } from "../../utils/redux-store/weatherApi";
// import useCoords from "../../utils/customHoooks/useCoords";
// import WeatherOverviewDescription from "./WeatherOverviewDescription";

// import useFetch from "../../utils/customHoooks/useFetch";

function CurrentWeatherOverview() {
   // const dispatch = useAppDispatch();
   // const { unit: tempUnit, coords } = useAppSelector((state) => state.weather);

   // const [skip, setSkip] = useState(true);

   // const { data, isLoading, isError } = useGetCurrentWeatherQuery(undefined, {
   //   skip
   // });

   // // console.log(isLoading, isError, data);

   // useEffect(() => {
   //   if (coords.lat && coords.lon) {
   //     if (skip) {
   //       setSkip(false);
   //     }
   //   }
   // }, [coords.lat, coords.lon, skip]);

   // console.log(data);

   // console.log(currentData, "current data");

   // console.log(tempUnit, "current unit");

   // localStorage.setItem("currentWeather", JSON.stringify(data));
   // localStorage.setItem("onecall", JSON.stringify(data));

   const currentWeather = localStorage.getItem('onecall')
   let data
   if (currentWeather) {
      data = JSON.parse(currentWeather)
   }

   const isLoading = false
   const isError = false
   const tempUnit = 'metric'

   // console.log(data);

   // https://openweathermap.org/img/wn/10d@2x.png

   return (
      <div className="flex justify-around">
         {isLoading && (
            <div className="flex items-center justify-around w-full">
               <Skeleton height={230} width={320} borderRadius={5}></Skeleton>
               <Skeleton height={100} width={200} borderRadius={5}></Skeleton>
            </div>
         )}
         {isError && <div>something went wrong</div>}
         {!isLoading && !isError && data && (
            <>
               <div className="min-h-20">
                  <div className="border-2 border-slate-100   py-5 px-10 rounded-lg">
                     <div className="flex justify-center items-center gap-14">
                        <div>
                           <CurrentTemperature
                              temp={data?.current?.temp}
                              tempUnit={tempUnit}
                              icon={data?.current?.weather[0]?.icon}
                           />
                           <div className="capitalize text-base text-slate-600 mt-[-15px]">
                              {data?.current?.weather[0]?.description}
                           </div>
                           <div className="flex items-center gap-1 mt-3 font-medium">
                              <span className="text-slate-600">
                                 Feels like -{' '}
                              </span>
                              <span className="text-slate-500 flex items-start">
                                 <span>{data?.current?.['feels_like']}</span>
                                 <span className="ml-[2px]">&deg;</span>
                                 <span className="text-[14px] self-start">
                                    C
                                 </span>
                              </span>
                           </div>
                        </div>
                        <div className="flex flex-col mt-8 gap-2">
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
                           unit={tempUnit}
                           value={data?.current?.['wind_speed']}
                        />
                        <WindHumidityCard
                           icon={humidity}
                           title="humidity"
                           unit=""
                           value={data?.current?.humidity}
                        />
                     </div>
                  </div>
               </div>
               <div className="basis-[40%] flex flex-col items-center mt-10">
                  <div className="flex gap-1 text-slate-600 items-baseline">
                     <span className="text-5xl ">
                        {format(new Date(data?.current?.dt * 1000), 'hh:mm')}
                     </span>
                     <span className="font-medium text-lg text-slate-500 uppercase">
                        {format(new Date(data?.current?.dt * 1000), 'aaa')}
                     </span>
                  </div>
                  <div className="ml-2 mt-1 text-base font-medium text-slate-600">
                     {format(new Date(data?.current?.dt * 1000), 'ccc, PPP')}
                  </div>
               </div>
            </>
         )}
      </div>
   )
}
{
   /* <WeatherOverviewDescription></WeatherOverviewDescription> */
}

export default CurrentWeatherOverview
