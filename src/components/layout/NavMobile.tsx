import { ClipboardList, Home, Package, Users, History } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

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
    <nav className='md:hidden w-full flex justify-between overflow-x-auto border-t p-2'>
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center justify-center p-2 text-sm mx-1 rounded-sm transition-colors ${location.pathname === item.path ? "bg-indigo-500 text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}
        >
          <item.icon className="mb-2 h-4 w-4" />
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
