import Footer from './Footer'
import Main from './Main'
import Header from './Header'


export default function Layout({ children } : { children: React.ReactNode}) {

  return (
    <div className='min-h-screen flex flex-col'>
      {/* HEADER PRINCIPAL */}
      <Header />
      {/* CONTEÚDO PRINCIPAL */}
      <Main children={children} />
      {/* RODAPÉ */}
      <Footer />
    </div>
  )
}
