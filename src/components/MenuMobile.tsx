import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function MenuMobile() {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon strokeWidth={1.5} size={18} />
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col  justify-center space-y-4 h-full px-6">
            <Link className="text-lg text-zinc-600 hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100 duration-300 transition-all px-4" to="/itens">Início</Link>
            <Link className="text-lg text-zinc-600 hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100 duration-300 transition-all px-4" to="/itens">Itens</Link>
            <Link className="w-full text-lg text-zinc-600 hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100  duration-300 transition-all px-4" to="/fieis">Fieis</Link>
            <Link className="text-lg text-zinc-600 hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100  duration-300 transition-all px-4" to="/conta">Conta</Link>
            <Link className="text-lg text-zinc-600  hover:text-blue-800 hover:border-b hover:border-b-blue-800 dark:text-zinc-300 dark:hover:text-blue-100 dark:hover:border-b-blue-100  duration-300 transition-all px-4 py-1" to="/">Sair</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}