import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "./store";

interface Coords {
  lat: number;
  lng: number;
}

interface WeatherState {
  coords: Coords;
  mapCoords: Coords;
  unit: string;
}

const initialState: WeatherState = {
  coords: {
    lat: 0,
    lng: 0
  },
  mapCoords: {
    lat: 0,
    lng: 0
  },
  unit: "metric"
};
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCoords: (state, action) => {
      state.coords = action.payload;
    },

    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    setMapCoords: (state, action) => {
      state.mapCoords = action.payload;
    }
  }
});

export const { setCoords, setUnit, setMapCoords } = weatherSlice.actions;

export default weatherSlice.reducer;
