import Homepage from './pages/Homepage'

import useCoords from './utils/customHoooks/useCoords'
// import { useAppSelector } from "./utils/redux-store/hooks";
// import { useGetCurrentWeatherQuery } from "./utils/redux-store/weatherApi";
// import { useEffect, useState } from "react";

function App() {
   useCoords()
   // const [skip, setSkip] = useState(true);
   // const coords = useAppSelector((state) => state.weather.coords);

   // const { data } = useGetCurrentWeatherQuery(undefined, {
   //   skip
   // });

   // console.log(data);

   // useEffect(() => {
   //   if (coords.lat && coords.lng) {
   //     if (skip) {
   //       setSkip(false);
   //     }
   //   }
   // }, [coords.lat, coords.lng, skip]);

   return (
      <div className="font-barlow font-normal text-base text-slate-700 min-h-screen py-10">
         <Homepage />
      </div>
   )
}

export default App
