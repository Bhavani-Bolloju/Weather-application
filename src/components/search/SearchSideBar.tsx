import React, { useRef, useState } from "react";
import { API_key } from "../../utils/customHoooks/useFetch";

function SearchSideBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  // const [city, setCity] = useState(null);

  const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cityName = inputRef?.current?.value;
    if (cityName) {
      const req = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}`
      );

      const res = await req.json();
      console.log(res, "cities");
      //dispatch the result to the redux store
      // setCity(res[0]);
      //do something
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
