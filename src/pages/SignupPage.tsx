import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSignup } from '@/hooks/useSignup'
import { Link } from 'react-router-dom'


export default function SignupPage() {
  const { handleSubmit } = useSignup()

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-sm md:max-w-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Agape - Cadastro</CardTitle>
          <CardDescription>Crie sua conta para começar a gerenciar os itens.</CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" type="text" placeholder="Seu nome..." required />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="ex: nome@igreja.com.br" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>

            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </form>
          <p className="mt-4 text-center text-sm">
            Já tem uma conta? {" "}
            <Link to="/entrar" className="underline text-primary">
              Fazer login
            </Link>
          </p>
        </CardContent>

      </Card>
    </main>
  )
}
