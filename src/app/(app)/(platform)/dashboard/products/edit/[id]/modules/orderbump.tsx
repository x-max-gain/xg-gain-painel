"use client"
import { Table } from "@/components/table"

/* eslint-disable @next/next/no-img-element */

export default function OrderbumpProductEdit() {
  const formHeader = [
    {label: "ORDER", children: (row: any) => row.date}, 
    {label: "PRODUTO", children: (row: any) => row.value}, 
    {label: "AÇÕES", children: (row: any) => <></>},
  ];
  return (
    <div className="w-full">
      <Table body={[]} header={formHeader} notfoundMessage="Você ainda não tem nenhuma ordem bump" />
    </div>
  )
}