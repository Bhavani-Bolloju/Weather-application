import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "./store";

interface Coords {
  lat: number;
  lon: number;
}

interface WeatherState {
  coords: Coords;
  unit: string;
}

const initialState: WeatherState = {
  coords: {
    lat: 0,
    lon: 0
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
    }
  }
});

export const { setCoords, setUnit } = weatherSlice.actions;

export default weatherSlice.reducer;
