import FormLogin from "@/components/FormLogin";
import Footer from "@/components/Footer";
import Header from "@/components/HeaderPrivate";

export default function LoginPage() {

  return (
    <div className="flex flex-col items-center justify-between min-h-screen mx-auto">
      <Header />
      <main className="w-full flex items-center justify-center px-6">
        <FormLogin />
      </main>
      <Footer />
    </div>
  )
}