import { format } from "date-fns";

interface SunriseSunsetCardProps {
  icon: string;
  value: number;
  title: string;
}

const SunriseSunsetCard = function ({
  icon,
  value,
  title
}: SunriseSunsetCardProps) {
  const date = new Date(value * 1000);
  const formatTime = format(date, "hh:mm aaa");

  return (
    <div>
      <div className="flex items-center justify-center ">
        <img src={icon} alt={title} className="w-[25px]  h-[28px]" />
        <p className="text-slate-500 capitalize font-medium">{title}</p>
      </div>
      <p className="text-slate-600 font-medium ml-2 capitalize mt-[-2px]">
        {formatTime}
      </p>
    </div>
  );
};

export default SunriseSunsetCard;
