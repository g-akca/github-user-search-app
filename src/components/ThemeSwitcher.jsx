import MoonIcon from "./icons/MoonIcon";

function ThemeSwitcher() {
  return (
    <button 
      type="button" 
      className="
        flex items-center gap-3 cursor-pointer transition-colors outline-blue-500 tablet:gap-4 hover:text-neutral-700 
        focus:rounded-sm focus:outline-offset-[3px] focus:outline-2 focus:outline-blue-500 focus:text-neutral-700
      "
    >
      <p className="uppercase text-[13px] leading-[140%] font-bold tracking-[2.5px]">Dark</p>
      <MoonIcon />
    </button>
  )
}

export default ThemeSwitcher;