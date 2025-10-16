import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export const useUser = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    toast.info("Usuário deslogado!")

    setTimeout(() => {
      toast.success("Logout realizado com sucesso!")
      navigate("/entrar")
    }, 800);
  }

  return {
    handleLogout
  }
}