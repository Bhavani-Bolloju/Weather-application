import Select from "react-dropdown-select";

import { useAppSelector } from "../../utils/redux-store/hooks";

import { OptionType } from "../../utils/types/types";

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
function SearchForm({ select, onSelect }) {
  const coords = useAppSelector((state) => state.weather.coords);

  return (
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
            onSelect(value);
          }}
        />

        {select[0]?.value === 1 ? (
          //user text input
          <input
            type="text"
            className="w-full flex-1 self-stretch border px-2 placeholder:text-slate-500  placeholder:text-md outline-none border-slate-500"
            placeholder="Search by city name or place"
            required
          />
        ) : (
          // coords inputs
          <div className="flex flex-1 ">
            <div className="flex items-center gap-2 border border-slate-500">
              <input
                type="tel"
                placeholder="latitude"
                className="w-full self-stretch border px-2 placeholder:text-slate-500 placeholder:capitalize placeholder:text-md outline-none"
                required
                value={coords.lat}
              />
            </div>
            <div className="flex items-center border border-slate-500  gap-2">
              <input
                type="tel"
                placeholder="longitude"
                className="w-full self-stretch border px-2 placeholder:text-slate-500 placeholder:capitalize placeholder:text-md outline-none"
                required
                value={coords.lng}
              />
            </div>
          </div>
        )}
      </div>
      <button className="px-10 bg-slate-600 mt-5 rounded-md py-1 text-slate-100 font-medium text-lg">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
