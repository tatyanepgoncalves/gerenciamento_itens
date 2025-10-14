import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";


export default function FormLogin() {

  return (
     <Card className="w-full max-w-2xl">
      <CardHeader className="grid items-center justify-center text-center">
        <CardTitle className="text-3xl">Entrar</CardTitle>
        <CardDescription className="max-w-[200px]">Entre no sistema e gerencie todos os itens da instituição.</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="ex: joaoteixeira@gmail.com" />
         
        </div>
          
        <div className="grid gap-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="*********" />
        </div>
      
      </CardContent>

      <CardFooter className="grid gap-2">
        <Button type="submit" className="bg-blue-800 text-zinc-100 uppercase tracking-wide font-medium cursor-pointer">
          <Link to="/home">Entrar</Link>
        </Button>
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-500">Ainda não tem cadastro? <Link className="font-medium" to="/cadastro">Cadastra-se.</Link></p>
      </CardFooter>
    </Card>
  )
}