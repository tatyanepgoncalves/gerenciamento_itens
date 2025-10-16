import Layout from "@/components/layout/Layout"
import { Toaster } from "@/components/ui/sonner"
import DashboardPage from "@/pages/DashboardPage"
import EmprestimoPage from "@/pages/EmprestimoPage"
import FieisPage from "@/pages/FieisPage"
import HistoricoPage from "@/pages/HistoricoPage"
import ItemPage from "@/pages/ItemPage"
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import type { JSX } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

// Simula rotas protegidas
function ProtectedRoute({ children }: { children: JSX.Element } ) {
  // Simula se o usuário está logado
  const isAuthenticated = true // Muda para true para ver o Dashboard

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Layout>{children}</Layout>
}


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<LoginPage />} path="/entrar" />
        <Route element={<SignupPage />} path="/cadastro" />

        <Route path="/" element={<ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>} />
      
        <Route path="/itens" element={<ProtectedRoute>
          <ItemPage />
        </ProtectedRoute>} />


        <Route path="/emprestimos" element={<ProtectedRoute>
          <EmprestimoPage />
        </ProtectedRoute>} />
        
        <Route path="/fieis" element={<ProtectedRoute>
          <FieisPage />
        </ProtectedRoute>} />
        
        <Route path="/historico" element={<ProtectedRoute>
          <HistoricoPage />
        </ProtectedRoute>} />


        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}