import { Link, } from 'react-router-dom'
import Footer from './Footer'
import Main from './Main'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import Action from './Action'


export default function Layout({ children } : { children: React.ReactNode}) {

  return (
    <div className='min-h-screen flex flex-col'>
      {/* HEADER PRINCIPAL */}
      <header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
          {/* Logo ou nome */}
          <Link to="/" className='text-2xl font-bold text-indigo-500 tracking-tighter'>Agape</Link>

          {/* Navagação Desktop */}
         <NavDesktop />

          {/* Ações: Dark Mode e Perfil */}
          <Action />
        </div>

        {/* Navegação Mobile */}
        <NavMobile />
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <Main children={children} />

      {/* RODAPÉ */}
      <Footer />
    </div>
  )
}
