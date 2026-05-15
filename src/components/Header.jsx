import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="flex justify-between items-center gap-4">
      <h1 className="lowercase text-[26px] font-bold leading-[100%] text-neutral-900">Devfinder</h1>

      <ThemeSwitcher />
    </header>
  )
}

export default Header;