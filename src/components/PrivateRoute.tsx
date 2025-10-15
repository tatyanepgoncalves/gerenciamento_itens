import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export default function PrivateRoute() {
  const { isAuthenticated } = useAuth()
  
  // O Outlet é usado para renderizar rotas filhas, 
  // mas aqui o usaremos para renderizar a rota 'home' como um 'filho' no AppRouter.
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />
}