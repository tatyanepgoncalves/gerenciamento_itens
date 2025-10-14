import FormSignup from "@/components/FormSignup";
import Footer from "@/components/shared/public/Footer";
import Header from "@/components/shared/public/Header";


export default function SignupPage() {
  return (
    <div className="max-w-5xl w-full p-6 mx-auto min-h-full flex flex-col items-center justify-center gap-20">
      <Header />
      <FormSignup />
      <Footer />
    </div>
  )
}