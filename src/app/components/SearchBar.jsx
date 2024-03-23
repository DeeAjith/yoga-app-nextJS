import React from "react";
import style from "../../styles/SearchBar.module.scss"; // Import your custom CSS file
import { Search } from "react-feather";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className={`${style.searchBar} relative block`}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <Search className="w-5 h-5 stroke-slate-300" size={18} />
      </span>
      <input
        type="text"
        placeholder="Search poses..."
        className={`placeholder:normal placeholder:text-slate-400 block bg-gray-100 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-50 focus:ring-gray-light focus:ring-1 sm:text-sm`}
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      
    </div>
  );
};

export default SearchBar;
