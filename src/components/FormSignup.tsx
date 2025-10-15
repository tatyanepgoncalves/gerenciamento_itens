import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { signupSchema, type SignupFormData } from "@/schema/authschemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useFakeDB } from "@/hooks/useFakeDB";
import { toast } from "sonner";

export default function FormSignup() {
  const { addUser, isEmailTaken }  = useFakeDB()
  const navigate = useNavigate()
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
     username: "",
     email: "",
     password: "",
     confirmPassword: ""
    },
  })
  

  // Função para submissão
  function onSubmit(values: SignupFormData) {
    if (isEmailTaken(values.email)) {
      form.setError("email", {
        type: "manual",
        message: "Este e-mail já está cadastrado."
      })

      return
    }

    // Adiciona os valores ao "banco de dados" (localStorage)
    addUser(values)

    localStorage.setItem("isAuthenticated", "true")

    // Notifica e redireciona
    console.log("Usuário cadastrado com sucesso e autenticado!")
    toast.success("Cadastro realizado com sucesso! Redirecionando para a àrea logada.")
    // toast.sucess
    // Após o cadastro, rediciona para a home
    setTimeout(() => {
        navigate("/home")
    }, 500);
  }

  return (
      <Card className="w-full max-w-xl">
        <CardHeader className="grid items-center justify-center text-center">
          <CardTitle className="text-3xl">Criar conta</CardTitle>
          <CardDescription className="max-w-[300px]">Preencha os campos abaixo para se cadastrar.</CardDescription>
        </CardHeader>
  
        <CardContent>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Nome de usuário */}
              <FormField 
                control={form.control}  
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              {/* E-mail */}
              <FormField 
                control={form.control}  
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="ex: email@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              {/* Senha */}
              <FormField 
                control={form.control}  
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Confirme a senha */}
              <FormField 
                control={form.control}  
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          
            <div className="space-y-2">
              <Button type="submit" className="bg-blue-800 text-zinc-100 uppercase tracking-wide font-medium cursor-pointer w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Cadastrando..." : "Cadastrar"}
              </Button>
              <p className="text-center text-sm text-zinc-600 dark:text-zinc-500">Já tem uma conta? <Link className="font-medium" to="/">Fazer login.</Link></p>
            </div>
            </form>
          </Form>

          
        </CardContent>
  
      </Card>
    )
}