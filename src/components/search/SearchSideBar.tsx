// import SearchInput from "./SearchInput";
import { useState } from "react";
import SearchPickMap from "./SearchPickMap";
import Select from "react-dropdown-select";

type OptionType = {
  value: number;
  label: string;
};
function SearchSideBar() {
  const [select, setSelect] = useState<OptionType[]>([
    {
      value: 1,
      label: "Search Location"
    }
  ]);

  const options = [
    {
      value: 1,
      label: "Enter Location"
    },
    {
      value: 2,
      label: "Pick Location"
    }
  ];
  return (
    <div className="bg-slate-50 basis-[35%] min-w-[350px] min-h-full  rounded-md p-5 flex-shrink-0 shadow-sm flex flex-col justify-between h-100%">
      <form action="">
        <div className="flex items-stretch">
          <Select
            className="w-fit"
            options={options}
            labelField="label"
            valueField="value"
            values={select}
            required
            onChange={(value) => {
              setSelect(value);
            }}
          />

          {select[0]?.value === 1 ? (
            <input
              type="text"
              className="w-full flex-1 self-stretch border px-2 placeholder:text-slate-500  placeholder:text-md outline-none border-slate-500"
              placeholder="Search by city name or place"
              required
            />
          ) : (
            <div className="flex flex-1 ">
              <div className="flex items-center gap-2 border border-slate-500">
                {/* <label htmlFor="" className="capitalize">
                  lat:{" "}
                </label> */}
                <input
                  type="tel"
                  placeholder="latitude"
                  className="w-full self-stretch border px-2 placeholder:text-slate-500 placeholder:capitalize placeholder:text-md outline-none"
                  required
                />
              </div>
              <div className="flex items-center border border-slate-500  gap-2">
                {/* <label htmlFor="" className="capitalize">
                  lng:
                </label> */}
                <input
                  type="tel"
                  placeholder="longitude"
                  className="w-full self-stretch border px-2 placeholder:text-slate-500 placeholder:capitalize placeholder:text-md outline-none"
                  required
                />
              </div>
            </div>
          )}
        </div>
        <button className="px-10 bg-slate-600 mt-5 rounded-md py-1 text-slate-100 font-medium text-lg">
          Search
        </button>
      </form>
      <SearchPickMap />
    </div>
  );
}

export default SearchSideBar;
