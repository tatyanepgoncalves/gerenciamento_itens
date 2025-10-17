import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const resume = {
  total: 120,
  disponiveis: 80,
  emprestados: 40,
  atrasados: 5,
}

export default function CardResumo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-2">
      <Card className="text-center">
        <CardHeader>
          <CardTitle>
            Total de Itens
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-2xl font-bold">{resume.total}</p>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardHeader>
          <CardTitle>Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl text-green-600 font-bold">{resume.disponiveis}</p>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardHeader>
          <CardTitle>Emprestados</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl text-yellow-600 font-bold">{resume.emprestados}</p>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardHeader>
          <CardTitle>Atrasados</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl text-red-600 font-bold">{resume.atrasados}</p>
        </CardContent>
      </Card>
    </section>
  )
}
