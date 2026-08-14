import { useCallback, useEffect, useState } from "react";
import SearchIcon from "./icons/SearchIcon";

function SearchBar({ setData, setError, setLoading, error }) {
  const [searchedValue, setSearchedValue] = useState("");

  const getFetchedData = useCallback(async (username) => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) throw new Error("No results");

      const data = await response.json();

      setData(data);
    }
    catch {
      setError(true);
    }

    setLoading(false);
  }, [setData, setError, setLoading]);

  useEffect(() => {
    getFetchedData("octocat");
  }, [getFetchedData]);

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedValue = searchedValue.trim();

    if (!trimmedValue) {
      setError(true);
      return;
    }

    getFetchedData(trimmedValue);
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="
        bg-white dark:bg-neutral-800 px-3 py-2 h-17.25 rounded-2xl shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] dark:shadow-none 
        flex justify-between items-center gap-1.5 outline-blue-500 tablet:gap-6 tablet:pl-6 focus-within:outline-offset-[3px] 
        focus-within:outline-2 focus-within:outline-blue-500 dark:focus-within:shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)]
      "
    >
      <div className="grow flex gap-2 items-center justify-between tablet:gap-5">
        <SearchIcon className="shrink-0 w-6 text-blue-500 dark:text-blue-300" aria-hidden="true" />

        <label htmlFor="username" className="sr-only">GitHub username</label>

        <input 
          id="username"
          type="text"
          className="w-full min-w-10 text-[13px] leading-[140%] text-neutral-700 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-white/70 focus:outline-none tablet:text-[18px]" 
          placeholder="Search GitHub username…" 
          value={searchedValue}
          onChange={(e) => setSearchedValue(e.target.value)}
          aria-describedby={error ? "user-error" : undefined}
        />

        {error && 
          <p 
            id="user-error" 
            role="alert" 
            className="whitespace-nowrap text-red-500 text-[11px] leading-base font-bold tablet:text-[16px]"
          >
            No results
          </p>
        }
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
