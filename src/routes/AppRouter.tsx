import PrivateRoute from "@/components/PrivateRoute"
import { Toaster } from "@/components/ui/sonner"
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<SignupPage />} path="/cadastro" />

        <Route element={<HomePage />} path="/home" />
       
      </Routes>
    </BrowserRouter>
  )
}