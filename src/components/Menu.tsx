import { Link } from "react-router-dom";


export default function Menu() {

  return (
    <nav className="hidden md:flex md:items-center  gap-4 h-full px-6">
      <Link className="text-sm text-zinc-600 hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100 duration-300 transition-all px-4" to="/itens">Início</Link>
      <Link className="text-sm text-zinc-600 hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100 duration-300 transition-all px-4" to="/itens">Itens</Link>
      <Link className="w-full text-sm text-zinc-600 hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100  duration-300 transition-all px-4" to="/fieis">Fieis</Link>
      <Link className="text-sm text-zinc-600 hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100 duration-300 transition-all px-4" to="/conta">Conta</Link>
      <Link className="text-sm text-zinc-600 hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100 duration-300 transition-all px-4" to="/">Sair</Link>
    </nav>
  )
}