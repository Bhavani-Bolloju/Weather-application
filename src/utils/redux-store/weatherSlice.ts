import { createSlice } from '@reduxjs/toolkit'
// import { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "./store";
import { OptionType, Coords } from '../types/types'
import { options } from '../types/types'

interface WeatherState {
   coords: Coords
   mapCoords: Coords
   unit: string
   searchType: OptionType[]
}

const initialState: WeatherState = {
   coords: {
      lat: 0,
      lng: 0,
   },
   mapCoords: {
      lat: 0,
      lng: 0,
   },
   unit: 'metric',
   searchType: [options[0]],
}
export const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {
      setCoords: (state, action) => {
         state.coords = action.payload
      },

      setUnit: (state, action) => {
         state.unit = action.payload
      },
      setMapCoords: (state, action) => {
         state.mapCoords = action.payload
      },
      selectSearchType: (state, action) => {
         state.searchType = action.payload
      },
   },
})

export const { setCoords, setUnit, setMapCoords, selectSearchType } =
   weatherSlice.actions

export default weatherSlice.reducer
