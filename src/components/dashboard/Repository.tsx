import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";


const topItens = [
  { nome: "Cadeira", qtd: 15 },
  { nome: "Caixa de som", qtd: 10 },
  { nome: "Microfone", qtd: 8 },
];

export default function Repository() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">
        Itens mais emprestados
      </h2>

      <section className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {topItens.map((t, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{t.nome}</CardTitle>
              <CardDescription>{t.qtd} vezes</CardDescription>
            </CardHeader>
          </Card>
          
        ))}
      </section>
    </section>
  )
}
