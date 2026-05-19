import { useEffect, useState } from "react";
import SearchIcon from "./icons/SearchIcon";

function SearchBar({ setData, setError, setLoading, error }) {
  const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    getFetchedData("octocat");
  }, []);

  async function getFetchedData(username) {
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) throw new Error("No results");

      const data = await response.json();

      setData(data);
      setError(false);
    }
    catch(e) {
      setError(true);
    }

    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    getFetchedData(searchedValue);
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="
        bg-white dark:bg-neutral-800 px-3 py-2 h-17.25 rounded-2xl shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] dark:shadow-none 
        flex justify-between items-center gap-1.5 outline-blue-500 tablet:gap-6 tablet:pl-6 focus-within:outline-offset-[3px] 
        focus-within:outline-2 focus-within:outline-blue-500
      "
    >
      <div className="grow flex gap-2 items-center justify-between tablet:gap-5">
        <SearchIcon className="text-blue-500 dark:text-blue-300" />

        <input 
          id="username"
          className="w-full min-w-10 text-[13px] leading-[140%] text-neutral-700 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-white/70 focus:outline-none tablet:text-[18px]" 
          placeholder="Search GitHub username…" 
          value={searchedValue}
          onChange={(e) => setSearchedValue(e.target.value)}
        />

        {error && <p className="whitespace-nowrap text-red-500 text-[11px] leading-base font-bold tablet:text-[16px]">No results</p>}
      </div>

      <button 
        type="submit" 
        className="
          h-12 px-5 py-3 bg-blue-500 rounded-[10px] text-white text-[16px] leading-base font-bold cursor-pointer transition-colors duration-300 
          outline-blue-500 tablet:px-6 hover:bg-blue-300 focus:outline-offset-2 focus:outline-2 focus:outline-blue-500
        "
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar;