import ToggleTheme from "./ToggleTheme";

export default function HeaderPrivate() {
  return (
    <header className="w-full">
      <div className="max-w-5xl w-full p-6 mx-auto flex justify-between items-center">
        <h2 className="font-roboto font-medium text-lg text-zinc-900 dark:text-zinc-100 tracking-wide">Gerenciamento</h2>
      
        <ToggleTheme />
      </div>
    </header>
  )
}