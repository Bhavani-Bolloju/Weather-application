// import React, { useRef } from "react";
// import { API_key } from "../../utils/customHoooks/useFetch";
// import { useAppDispatch } from "../../utils/redux-store/hooks";

import SearchInput from "./SearchInput";
import SearchPickMap from "./SearchPickMap";

function SearchSideBar() {
  // const [city, setCity] = useState(null);

  // console.log(city);

  return (
    <div className="bg-slate-50 basis-[35%] min-w-[350px] min-h-full  rounded-md p-5 flex-shrink-0 shadow-sm flex flex-col justify-between h-100%">
      <SearchInput />
      <SearchPickMap />
    </div>
  );
}

export default SearchSideBar;
