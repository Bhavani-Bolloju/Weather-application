import React, { useRef } from "react";
import { API_key } from "../../utils/customHoooks/useFetch";
import { useAppDispatch } from "../../utils/redux-store/hooks";

import { setCoords } from "../../utils/redux-store/weatherSlice";

function SearchSideBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  // const [city, setCity] = useState(null);

  const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cityName = inputRef?.current?.value;
    if (!cityName) return;

    console.log(cityName, "search string");
    try {
      const req = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}`
      );

      const res = await req.json();

      if (res.length <= 0) {
        throw new Error(`Try again with different location`);
      }

      const { lat, lon } = res[0];

      // console.log(lat, lon);
      dispatch(setCoords({ lat, lon }));
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(city);

  return (
    <div className="bg-slate-50 basis-[35%] min-w-[350px] min-h-28 rounded-md p-5 flex-shrink-0 shadow-sm">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start">
          <p className="text-slate-600 font-medium">Enter location:</p>
          <input
            ref={inputRef}
            type="text"
            className="w-[80%] mt-1 h-10 rounded-md border-2  p-1 border-slate-200 outline-none focus:outline-none capitalize font-normal text-slate-600"
            required
          />
          <button className="mt-2 px-2 rounded-sm bg-slate-600 outline-none text-slate-100 capitalize">
            search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchSideBar;
