// import React from 'react'
import SearchSideBar from '../components/search/SearchSideBar'
import WeatherResults from '../components/weather-results/WeatherResults'

function Homepage() {
   return (
      <div className="flex justify-center items-stretch max-w-[1450px] max-h-[1200px] gap-4 m-auto p-5 bg-white rounded-md">
         <SearchSideBar />
         <WeatherResults />
      </div>
   )
}

export default Homepage
