import { cn } from '@/lib/utils'
import { ClipboardList, Home, Package, Users, History } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Dashboard', path: "/", icon: Home },
  { name: 'Itens', path: "/itens", icon: Package },
  { name: 'Empréstimos', path: "/emprestimos", icon: ClipboardList },
  { name: 'Fiéis', path: "/fieis", icon: Users },
  { name: 'Histórico', path: "/historico", icon: History },
]

export default function NavDesktop() {
  const location = useLocation()
  
  return (
     <nav className='hidden md:flex items-center space-x-4'>
      {navItems.map((item) => (
        <Link key={item.path}
          to={item.path}
          // APLICANDO AS CLASSES DO BOTÃO DIRETAMENTE NO LINK
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2", // Classes base do button
            location.pathname === item.path 
              ? "bg-primary text-primary-foreground shadow hover:bg-primary/90" // Classes da variant="default"
              : "hover:bg-accent hover:text-accent-foreground" // Classes da variant="ghost"
          )}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
        </Link>
      ))}
    </nav>
  )
}
