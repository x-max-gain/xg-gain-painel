import { Card } from "@/components/card";

export function Cards() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-4">
        <Card title="Faturamento bruto" type="money" value="1084406130" />

        <Card title="Faturamento liquido" type="money" value="94793331" />

        <Card title="Qtd. Vendas" type="number" value="14527" />
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-4">
        <Card title="Chargeback" type="percentage" value="007" />

        <Card title="Reembolso" type="percentage" value="000" />

        <Card title="Valores reembolsados/chargeback" type="money" value="759,08" />
      </div>
    </div>
  )
}