import { ClipboardList, Home, Package, Users, History, Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetDescription, SheetTitle, SheetClose} from "../ui/sheet"
import { Button } from '../ui/button'

const navItems = [
  { name: 'Dashboard', path: "/", icon: Home },
  { name: 'Itens', path: "/itens", icon: Package },
  { name: 'Empréstimos', path: "/emprestimos", icon: ClipboardList },
  { name: 'Fiéis', path: "/fieis", icon: Users },
  { name: 'Histórico', path: "/historico", icon: History },
]


export default function NavMobile() {
  const location = useLocation()
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button aria-label="Abrir menu mobile">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navagação Mobile</SheetTitle>
          <SheetDescription>Selecione uma opção abaixo.</SheetDescription>
        </SheetHeader>

        <nav className='grid gap-2 p-4'>
          {navItems.map((link) => {
            const isActive = location.pathname === link.path
            return (
            <SheetClose asChild key={link.name}>
                <Link className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-indigo-600 text-white font-semibold shadow-md' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'}`} to={link.path}>
                  <link.icon className='h-5 w-5' /> 
                  <span>{link.name}</span>
                </Link>
            </SheetClose>
            )
          })}
        </nav>
      </SheetContent>

    </Sheet>
  )
}
