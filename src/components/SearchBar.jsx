import { useState } from "react";
import searchIcon from "/images/icon-search.svg";

function SearchBar() {
  const [searchedValue, setSearchedValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white px-3 py-2 h-17.25 rounded-2xl shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] flex justify-between items-center gap-1">
      <div className="grow flex gap-2 items-center">
        <img src={searchIcon} alt="Search icon" className="w-5" />

        <input 
          className="grow text-[13px] leading-[140%] text-neutral-700 placeholder:text-neutral-500" 
          placeholder="Search GitHub username…" 
          value={searchedValue}
          onChange={(e) => setSearchedValue(e.target.value)}
        />
      </div>

      <button type="submit" className="h-12 px-5 py-3 bg-blue-500 rounded-[10px] text-white text-[16px] leading-base font-bold">
        Search
      </button>
    </form>
  )
}

export default SearchBar;