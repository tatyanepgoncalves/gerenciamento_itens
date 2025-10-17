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
     <nav className='hidden lg:flex items-center space-x-4'>

      {navItems.map((link) => {
        const isActive = location.pathname === link.path

        return (
          <Link 
            key={link.name} 
            to={link.path}
           className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-indigo-600 text-white font-semibold shadow-md' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'}`} 
          >
            <link.icon className='h-5 w-5' />
            {link.name}
          </Link>

        )
      })}

      
     
    </nav>
  )
}
