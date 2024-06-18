// import React from 'react'

interface WindHumidityCardProps {
  icon: string;
  value: string;
  title: string;
}

const WindHumidityCard = function ({
  icon,
  title,
  value
}: WindHumidityCardProps) {
  return (
    <div className="grid grid-cols-icons gap-x-1 leading-[15px]">
      <div className="row-start-1 row-end-3 col-span-1">
        <img src={icon} alt={title} className="w-full h-full" />
      </div>
      <div className="font-medium text-slate-600">
        <span className="text-lg leading-[15px]">{value}</span>
        {title === "wind" && (
          <span className="ml-[1px] text-slate-500">m/s</span>
        )}
        {title === "humidity" && (
          <span className=" text-slate-500 ml-1">%</span>
        )}
      </div>
      <p className="text-slate-500 capitalize font-medium mb-1 text-sm">
        {title}
      </p>
    </div>
  );
};

export default WindHumidityCard;
