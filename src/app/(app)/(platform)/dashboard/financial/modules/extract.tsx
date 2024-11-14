import { Card } from "@/components/card";
import { Table } from "@/components/table";
import { useState } from "react";

export default function ExtractFinancial() {
  const formHeader = [
    {label: "DATA", children: (row: any) => row.date}, 
    {label: "VALOR", children: (row: any) => row.value}, 
    {label: "BANCO", children: (row: any) => row.banco}, 
    {label: "CONTA", children: (row: any) => row.account}, 
    {label: "STATUS", children: (row: any) => row.status}, 
    {label: "AÇÕES", children: (row: any) => row.action},
  ];
  const [financial, setFinancial] = useState<Array<any>>([]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-4 max-[640px]:grid-cols-1">
        <Card title="Saques pagos" type="number" value="0" />
        <Card title="Total pago por taxa de saque" type="number" value="0" />
      </div>
      {
        financial && <Table header={formHeader} body={financial} notfoundMessage="Você não tem nenhum saque" />
      }
    </>
  )
}