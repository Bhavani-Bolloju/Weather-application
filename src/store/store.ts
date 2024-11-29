import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from './weather-api'
import weatherReducer from './weather-slice'

export const store = configureStore({
   reducer: {
      weather: weatherReducer,
      [weatherApi.reducerPath]: weatherApi.reducer,
   },
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(weatherApi.middleware)
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
