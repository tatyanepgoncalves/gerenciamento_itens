import { Toaster } from "@/components/ui/sonner"
import DashboardPage from "@/pages/DashboardPage"
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import type { JSX } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

// Simula rotas protegidas
function ProtectedRoute({ children }: { children: JSX.Element } ) {
  // Simula se o usuário está logado
  const isAuthenticated = false // Muda para true para ver o Dashboard

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<LoginPage />} path="/entrar" />
        <Route element={<SignupPage />} path="/cadastro" />

        <Route element={<HomePage />} path="/home" />
        <Route path="/" element={<ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>} />


        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}