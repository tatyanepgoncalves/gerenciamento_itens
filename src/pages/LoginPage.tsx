import FormLogin from "@/components/FormLogin";
import Footer from "@/components/shared/public/Footer";
import Header from "@/components/shared/public/Header";

export default function LoginPage() {
  return (
    <div className="max-w-5xl w-full p-6 mx-auto min-h-full flex flex-col items-center justify-center gap-30">
      <Header />
      <FormLogin />
      <Footer />
    </div>
  )
}