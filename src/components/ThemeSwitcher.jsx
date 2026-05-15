import moonIcon from "/images/icon-moon.svg";

function ThemeSwitcher() {
  return (
    <button type="button" className="flex items-center gap-3">
      <p className="uppercase text-[13px] leading-[140%] font-bold tracking-[2.5px]">Dark</p>
      <img src={moonIcon} alt="Moon icon" className="w-5 aspect-square" />
    </button>
  )
}

export default ThemeSwitcher;