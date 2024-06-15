// import React from 'react'
import { DailyDataProp } from "../../utils/types/types";
import DayWeather from "./DayWeather";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function DailyWeatherDetails() {
  const storedData = localStorage.getItem("onecall");

  let data;
  if (storedData) {
    data = JSON.parse(storedData);
  }

  const daily = data?.daily;
  console.log(daily);

  return (
    <div className="mt-10 mx-5">
      <CarouselProvider
        naturalSlideHeight={125}
        naturalSlideWidth={100}
        totalSlides={8}
        visibleSlides={4}
        dragEnabled={true}
        isPlaying={false}
        interval={5000}
        step={1}
        playDirection="forward"
        infinite={true}
      >
        <Slider moveThreshold={0.1}>
          {data?.daily.map((dailyWeatherItem: DailyDataProp, i: number) => (
            <DayWeather
              key={i}
              dt={dailyWeatherItem?.dt}
              minTemp={dailyWeatherItem?.temp?.min}
              maxTemp={dailyWeatherItem?.temp?.max}
              description={dailyWeatherItem?.weather[0]?.description}
              iconCode={dailyWeatherItem?.weather[0]?.icon}
              index={i}
            />
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default DailyWeatherDetails;
