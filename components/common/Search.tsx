import React from "react";
import { ISearch } from "@/Types/TSearch";

const Search = ({searchText, setSearchText}: ISearch) => {
  return (
    <div className="flex flex-1">
      <input
        type="search"
        placeholder="Axtar"
        className="flex-1 border-1 p-2 my-2 mx-2 bg-red-900 rounded-md outline-red-900 text-white"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
