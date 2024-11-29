// import React from 'react'
import { DailyDataProp } from '../../types/types'
import DayWeather from './day-weather'
import {
   CarouselProvider,
   Slider,
   ButtonBack,
   ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

function DailyWeatherDetails() {
   const storedData = localStorage.getItem('onecall')

   let data
   if (storedData) {
      data = JSON.parse(storedData)
   }

   return (
      <div className="mt-10 mx-5 relative">
         <CarouselProvider
            naturalSlideHeight={100}
            naturalSlideWidth={100}
            totalSlides={8}
            visibleSlides={4}
            dragEnabled={false}
            isPlaying={false}
            interval={5000}
            step={1}
            playDirection="forward"
            infinite={true}
         >
            <Slider moveThreshold={0.1}>
               {data?.daily.map(
                  (dailyWeatherItem: DailyDataProp, i: number) => (
                     <DayWeather
                        key={i}
                        dt={dailyWeatherItem?.dt}
                        minTemp={dailyWeatherItem?.temp?.min}
                        maxTemp={dailyWeatherItem?.temp?.max}
                        description={dailyWeatherItem?.weather[0]?.description}
                        iconCode={dailyWeatherItem?.weather[0]?.icon}
                        index={i}
                     />
                  ),
               )}
            </Slider>
            <ButtonBack className="rotate-180 absolute left-[-30px] top-1/2 ">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5  text-slate-500"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
               </svg>
            </ButtonBack>
            <ButtonNext className="absolute right-[-30px] top-1/2">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5  text-slate-500"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
               </svg>
            </ButtonNext>
         </CarouselProvider>
      </div>
   )
}

export default DailyWeatherDetails
