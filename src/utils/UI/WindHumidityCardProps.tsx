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
    <div className="flex flex-col justify-start">
      <div className="flex items-center gap-[2px]">
        <img src={icon} alt={title} />
        <p className="text-slate-500 capitalize font-medium leading-1">
          {title}
        </p>
      </div>
      <div className="font-medium text-slate-600 ml-1">
        <span className="text-lg">{value}</span>
        {title === "wind" && (
          <span className="ml-[2px] text-slate-500">m/s</span>
        )}
        {title === "humidity" && (
          <span className="ml-[2px] text-slate-500">%</span>
        )}
      </div>
    </div>
  );
};

export default WindHumidityCard;
