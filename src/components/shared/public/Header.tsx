import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full">
      <h2 className="font-roboto font-medium text-lg text-zinc-900 dark:text-zinc-100 tracking-wide">MindShelf</h2>
      
      <ToggleTheme />
    </header>
  )
}