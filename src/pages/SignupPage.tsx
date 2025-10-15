import FormSignup from "@/components/FormSignup";
import Footer from "@/components/Footer";
import Header from "@/components/HeaderPrivate";


export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <Header />
      <main className="w-full flex items-center justify-center px-6"> 
        <FormSignup />
      </main>
      <Footer />
    </div>
  )
}