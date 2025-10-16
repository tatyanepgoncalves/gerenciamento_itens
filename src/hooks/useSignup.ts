import type React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"


export const useSignup = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.info("Tentativa de cadastro.")
    toast.success("Cadastro realizado com sucesso")

    setTimeout(() => {
      navigate("/")
    }, 500); 
  }


  return {
    handleSubmit
  }

}