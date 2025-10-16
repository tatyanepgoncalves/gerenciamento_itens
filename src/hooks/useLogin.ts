import type React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"


export const useLogin = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.info("Tentativa de login.")
    toast.success("Login realizado com sucesso")

    setTimeout(() => {
      navigate("/")
    }, 500); 
  }




  return {
    handleSubmit
  }

}