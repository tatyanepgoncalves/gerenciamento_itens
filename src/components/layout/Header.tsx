import { Link } from "react-router-dom";
import NavDesktop from "./NavDesktop";
import Action from "./Action";

export default function Header() {
  return (
    <header className='sticky top-0 z-40 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl'>
        {/* Logo ou nome */}
        <Link to="/" className='text-2xl font-bold text-indigo-500 tracking-tighter text-indigo-500'>Ágape</Link>

        {/* Navagação Desktop */}
        <NavDesktop />

        {/* Ações: Dark Mode e Perfil */}
        <Action />
      
      </div>

    </header>
  )
}