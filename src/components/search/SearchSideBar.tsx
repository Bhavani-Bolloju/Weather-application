// import SearchInput from "./SearchInput";
import { useState } from "react";
import SearchPickMap from "./SearchPickMap";
import { OptionType } from "../../utils/types/types";
import SearchForm from "./SearchForm";

function SearchSideBar() {
  const [select, setSelect] = useState<OptionType[]>([
    {
      value: 1,
      label: "Search Location"
    }
  ]);

  const selectHandler = function (value) {
    setSelect(value);
  };

  // console.log(coords);

  return (
    <div className="bg-slate-50 basis-[35%] min-w-[350px] min-h-full  rounded-md p-5 flex-shrink-0 shadow-sm flex flex-col justify-between h-100%">
      <SearchForm select={select} onSelect={selectHandler} />
      <SearchPickMap />
    </div>
  );
}

export default SearchSideBar;
