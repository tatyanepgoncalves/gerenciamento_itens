import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function FormSignup() {
  return (
      <Card className="w-full max-w-xl">
        <CardHeader className="grid items-center justify-center text-center">
          <CardTitle className="text-3xl">Cadastrar</CardTitle>
          <CardDescription className="max-w-[300px]">Cadastra-se no sistema e gerencie todos os itens da instituição.</CardDescription>
        </CardHeader>
  
        <CardContent>
          <div className="grid gap-2">
            <Label htmlFor="username">Nome do usuário</Label>
            <Input id="username" type="text" placeholder="ex: João Teixeira" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="ex:joaoteixeira@gmail.com" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="*********" />
          </div>
        
        </CardContent>
  
        <CardFooter className="grid gap-2">
          <Button type="submit" className="bg-blue-800 text-zinc-100 uppercase tracking-wide font-medium cursor-pointer">
            <Link to="/home">Cadastrar</Link>
          </Button>
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-500">Já tem conta? <Link className="font-medium" to="/">Acesse.</Link></p>
      </CardFooter>
      </Card>
    )
}