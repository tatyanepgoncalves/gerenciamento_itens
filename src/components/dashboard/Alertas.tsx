import { Button } from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'

const alertas = [
  { id: 1, item: "Caixa de som", fiel: "Maria", prazo: "20/10/2025", status: "atrasado" },
  { id: 2, item: "Projetor", fiel: "João", prazo: "19/10/2025", status: "próximo" },
];

export default function Alertas() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Alertas de Empréstimos</h2>

      <section className="flex items-center justify-between gap-4">
        {alertas.map((a) => (
          <Card key={a.id} className="flex justify-between items-center px-4 py-4 gap-4 w-full h-40">
            <CardHeader className='w-full px-0 text-center'>
              <p><strong>{a.item}</strong> - {a.fiel}</p>
              <p className="text-sm text-zinc-500">Prazo: {a.prazo}</p>
            </CardHeader>
            <CardContent className=''>
              <Button variant={a.status === "atrasado" ? 'destructive' : 'secondary'}>
                Enviar aviso
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </section>
  )
}
