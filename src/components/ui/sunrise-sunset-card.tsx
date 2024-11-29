import { format } from 'date-fns'

interface SunriseSunsetCardProps {
   icon: string
   value: number
   title: string
}

const SunriseSunsetCard = function ({
   icon,
   value,
   title,
}: SunriseSunsetCardProps) {
   const date = new Date(value * 1000)
   const formatTime = format(date, 'hh:mm aaa')

   return (
      <div className="grid grid-cols-card leading-[15px]">
         <div className="row-start-1 row-end-3 col-span-1 ">
            <img src={icon} alt={title} className="w-full h-full" />
         </div>

         <p className=" text-[15px] font-medium capitalize text-slate-600">
            {formatTime}
         </p>
         <p className="text-slate-500 capitalize font-medium mb-1 text-sm">
            {title}
         </p>
      </div>
   )
}

export default SunriseSunsetCard
