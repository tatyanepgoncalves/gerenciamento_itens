import ToggleTheme from "../public/ToggleTheme";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

export default function Header() {

  return (
    <header className="w-full">
      <div className="max-w-5xl w-full p-6 mx-auto flex justify-between items-center">
        <h2 className="font-roboto font-medium text-lg text-zinc-900 dark:text-zinc-100 tracking-wide">Gerenciamento</h2>

        <Menu />

        <div className="flex items-center gap-2">
          <ToggleTheme />
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}