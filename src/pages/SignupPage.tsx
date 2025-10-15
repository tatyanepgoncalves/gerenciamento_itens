import FormSignup from "@/components/FormSignup";
import Footer from "@/components/shared/public/Footer";
import Header from "@/components/shared/public/Header";


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