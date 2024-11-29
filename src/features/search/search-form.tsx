import Select from 'react-dropdown-select'

import { useAppSelector, useAppDispatch } from '@/store/hooks'

import {
   selectSearchType,
   setMapCoords,
   setCoords,
} from '@/store/weather-slice'

import React, { useRef } from 'react'
import { options } from '@/types/types'
import { weatherApi } from '@/store/weather-api'
import { API_key } from '@utils/constants/constants'

import { Coords } from '@/types/types'

function SearchForm() {
   const { mapCoords, searchType } = useAppSelector((state) => state.weather)
   const inputRef = useRef<HTMLInputElement>(null)

   const dispatch = useAppDispatch()

   const handleCoords = function (e: React.ChangeEvent<HTMLInputElement>) {
      dispatch(setMapCoords({ ...mapCoords, [e.target.name]: e.target.value }))
   }

   const handleSearch = async function (e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      let searchCoords: Coords | 0 = 0
      const value = searchType[0].value

      if (value === 2) {
         searchCoords = { lat: mapCoords.lat, lng: mapCoords.lng }
         //fetch by coords
         // dispatch(setCoords({ lat: mapCoords.lat, lng: mapCoords.lng }));

         // //refetch through api endpoint
         // dispatch(
         //   weatherApi.endpoints.getCurrentWeather.initiate(undefined, {
         //     subscribe: false,
         //     forceRefetch: true
         //   })
         // );
      }

      if (value === 1) {
         //fetch by name
         const cityName = inputRef?.current?.value
         if (!cityName) return

         console.log(cityName, 'search string')
         try {
            const req = await fetch(
               `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}`,
            )

            const res = await req.json()

            if (res.length <= 0) {
               throw new Error(`Try again with different location`)
            }

            console.log(res)

            const { lat, lon } = res[0]

            searchCoords = { lat: +lat.toFixed(3), lng: +lon.toFixed(3) }

            // console.log(lat, lon);
            // dispatch(setCoords({ lat, lng: lon }));

            // //refetch through api endpoint
            // dispatch(
            //   weatherApi.endpoints.getCurrentWeather.initiate(undefined, {
            //     subscribe: false,
            //     forceRefetch: true
            //   })
            // );
         } catch (error) {
            console.log(error)
         }
      }

      if (searchCoords === 0) return

      //fetch by coords
      dispatch(setCoords(searchCoords))

      //refetch through api endpoint
      dispatch(
         weatherApi.endpoints.getCurrentWeather.initiate(undefined, {
            subscribe: false,
            forceRefetch: true,
         }),
      )

      // console.log(searchCoords);
   }

   return (
      <form onSubmit={handleSearch}>
         <div className="flex items-stretch">
            <Select
               className="w-fit"
               options={options}
               labelField="label"
               valueField="value"
               values={searchType}
               required
               onChange={(value) => {
                  dispatch(selectSearchType(value))
               }}
            />

            {searchType[0]?.value === 1 ? (
               <input
                  type="text"
                  className="w-full flex-1 self-stretch border px-2 placeholder:text-slate-500  placeholder:text-md outline-none border-slate-500"
                  placeholder="Search by city name or place"
                  required
                  ref={inputRef}
               />
            ) : (
               // coords inputs
               <div className="flex flex-1 ">
                  <div className="flex items-center gap-2 border border-slate-500">
                     <input
                        type="tel"
                        placeholder="latitude"
                        className="w-full self-stretch border px-2 placeholder:text-slate-500 placeholder:capitalize placeholder:text-md outline-none"
                        required
                        name="lat"
                        value={mapCoords.lat === 0 ? '' : mapCoords.lat}
                        onChange={handleCoords}
                     />
                  </div>
                  <div className="flex items-center border border-slate-500  gap-2">
                     <input
                        type="tel"
                        placeholder="longitude"
                        className="w-full self-stretch border px-2 placeholder:text-slate-500 placeholder:capitalize placeholder:text-md outline-none"
                        required
                        name="lng"
                        value={mapCoords.lng === 0 ? '' : mapCoords.lng}
                        onChange={handleCoords}
                     />
                  </div>
               </div>
            )}
         </div>
         <button className="px-10 bg-slate-600 mt-5 rounded-md py-1 text-slate-100 font-medium text-lg">
            Search
         </button>
      </form>
   )
}

export default SearchForm
