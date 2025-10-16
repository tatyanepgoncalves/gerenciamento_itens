import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLogin } from "@/hooks/useLogin"
import { Label } from "@radix-ui/react-label"
import { Link } from "react-router-dom"


export default function LoginPage() {
  const { handleSubmit } = useLogin()

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-sm md:max-w-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Agape - Login</CardTitle>
          <CardDescription>Entre com suas credenciais para acessar o painel de gestão.</CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="ex: nome@igreja.com.br" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>

            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
          <p className="mt-4 text-center text-sm">
            Não tem uma conta? {" "}
            <Link to="/cadastro" className="underline text-primary">
              Cadastra-se
            </Link>
          </p>
        </CardContent>

      </Card>
    </main>
  )
}
