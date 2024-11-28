// import SearchInput from "./SearchInput";
// import { useState } from "react";
import SearchPickMap from './search-pick-map'
// import { OptionType } from "../../utils/types/types";
import SearchForm from './search-form'

function SearchSideBar() {
   return (
      <div className="bg-slate-50 basis-[35%] min-w-[350px] min-h-full  rounded-md p-5 flex-shrink-0 shadow-sm flex flex-col justify-between h-100%">
         <SearchForm />
         <SearchPickMap />
      </div>
   )
}

export default SearchSideBar
