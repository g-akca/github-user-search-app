import { useTheme } from "../context/ThemeContext";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

function ThemeSwitcher() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button 
      type="button" 
      onClick={() => setDarkMode(prev => !prev)}
      className="
        flex items-center gap-3 cursor-pointer transition-colors outline-blue-500 tablet:gap-4 hover:text-neutral-700
        focus:rounded-sm focus:outline-offset-[3px] focus:outline-2 focus:outline-blue-500 focus:text-neutral-700
        dark:text-neutral-200
      "
    >
      <p className="uppercase text-[13px] leading-[140%] font-bold tracking-[2.5px]">
        {darkMode ? "Light" : "Dark"}
      </p>

      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeSwitcher;