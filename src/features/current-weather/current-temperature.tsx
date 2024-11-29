import { Temp } from '@/types/types'

const handlerUnits = function (unit: string) {
   console.log(unit)
   // if (tempUnit !== unit) {
   //   dispatch(setUnit(unit));
   //   dispatch(
   //     weatherApi.endpoints.getCurrentWeather.initiate(undefined, {
   //       subscribe: false,
   //       forceRefetch: true
   //     })
   //   );
   // }
}

const CurrentTemperature = function ({ temp, tempUnit, icon }: Temp) {
   return (
      <div className="flex items-center">
         <div className="w-[70px] h-auto ml-[-20px]">
            <img
               src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
               alt="weather icon"
               width={45}
               height={45}
               className="w-full object-cover"
            />
         </div>
         <div className="text-slate-700 font-medium flex">
            <span className="text-3xl ml-[-5px]">{temp}</span>
            <span className="text-lg align-top ml-[0.5px]">&deg;</span>
            <span className="align-top text-xl flex items-baseline self-start text-slate-600 gap-[2px] ml-1 font-normal">
               <button
                  className={`outline-none self-start ${
                     tempUnit === 'metric' && 'text-slate-600 font-medium'
                  }`}
                  onClick={() => handlerUnits('metric')}
               >
                  C
               </button>
               <span className="w-[2px] h-4 bg-slate-400 self-center"></span>
               <button
                  className={`outline-none self-start ${
                     tempUnit === 'imperial' ? 'text-slate-600 font-medium' : ''
                  }`}
                  onClick={() => handlerUnits('imperial')}
               >
                  F
               </button>
            </span>
         </div>
      </div>
   )
}

export default CurrentTemperature
