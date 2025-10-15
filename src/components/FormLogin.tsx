import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "@/schema/authschemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useFakeDB } from "@/hooks/useFakeDB";
import { toast } from "sonner";


export default function FormLogin() {
  const { loginUser } = useFakeDB()
  const navigate = useNavigate()

   // Defina o formulário com o zodResolver
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  

  // Função de Submissão
 function onSubmit(values: LoginFormData) {
    const user = loginUser(values);

    if (user) {
      // Simulação de Login de Sucesso
      localStorage.setItem('isAuthenticated', 'true'); 
      toast.success(`Bem-vindo de volta, ${user.name.split(" ")[0]!}`) // Notificação de sucesso
      // (Em um sistema real, salvar um JWT ou token de sessão aqui)
      
      // Redirecionamento com um pequeno delay para a toast aparecer
      setTimeout(() => {
         navigate("/home")
      }, 500); 
      
    } else {
      //  Login Falhou
      // Use o setError do RHF para exibir uma mensagem de erro geral ou no campo email
      form.setError("email", {
        type: "manual",
        message: "E-mail ou senha inválidos.",
      });

      toast.error("Falha no login. Verifique suas credenciais.")
    }
  }
  
  return (
     <Card className="max-w-xl w-full">
        <CardHeader className="text-center">
          <CardTitle>Login</CardTitle>
          <CardDescription>Acesse sua conta para continuar.</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* E-mail */}
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: email@email.com" {...field} />
                  </FormControl>
                  <FormMessage /> {/* Exibe mensagem de erro */}
                </FormItem>
              )} />

              <FormField 
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                  <FormMessage />  {/* Exibe mensagem de erro */}
                  </FormItem>
                )}
              />

              <div className="text-center space-y-2">
                <Button type="submit" className="w-full bg-blue-700 uppercase tracking-wide font-semibold text-zinc-100">
                  <Link to="/home">Entrar</Link>
                </Button>
                <p className="text-sm dark:text-zinc-300">Não tem uma conta? {" "} <Link to="/cadastro" className="font-medium">Cadastra-se</Link></p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
  )
}