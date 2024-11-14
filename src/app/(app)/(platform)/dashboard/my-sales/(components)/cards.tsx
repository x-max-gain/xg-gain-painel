import { Card } from "@/components/card";

export function Cards() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-4">
        <Card title="Faturamento bruto (Todos os status)" type="money" value="1084406130" />

        <Card title="Faturamento liquido" type="money" value="94793331" />

        <Card title="Faturamento liquido - PIX" type="number" value="14527" />
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-4">
        <Card title="Total de vendas" type="number" value="14527" />

        <Card title="Vendas aprovadas" type="number" value="13526" />

        <Card title="Taxa de conversão" type="percentage" value="57" />
      </div>
    </div>
  )
}