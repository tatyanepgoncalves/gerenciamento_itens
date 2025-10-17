import Alertas from "@/components/dashboard/Alertas";
import CardResumo from "@/components/dashboard/CardResumo";
import Repository from "@/components/dashboard/Repository";


export default function DashboardPage() {

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">
        Bem-vindo ao Ágape
      </h1>

      {/* Cards de resumo */}
      <CardResumo />
      {/* Alertas */}
      <Alertas />
      {/* Relatório rápido */}
      <Repository />

    </main>
  )
}
