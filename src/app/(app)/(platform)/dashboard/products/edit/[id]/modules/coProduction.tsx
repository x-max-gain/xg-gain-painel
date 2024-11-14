"use client"
import { Table } from "@/components/table"

/* eslint-disable @next/next/no-img-element */

export default function CoProductionProductEdit() {
  const formHeader = [
    {label: "COPRODUTOR", children: (row: any) => row.date}, 
    {label: "STATUS", children: (row: any) => row.value}, 
    {label: "PARTICIPAÇÕES", children: (row: any) => row.value}, 
    {label: "ÚLTIMA ALTERAÇÃO", children: (row: any) => row.value}, 
    {label: "AÇÕES", children: (row: any) => <></>},
  ];
  return (
    <div className="w-full">
        <div className="flex justify-end">
            <a 
                href="" 
                className="mb-2 flex justify-center inline-flex items-center px-6 py-4 text-base font-medium text-white bg-green-500 rounded-lg">
            Adicionar Coprodutor
            </a>
        </div>
        <Table body={[]} header={formHeader} notfoundMessage="Você ainda não tem nenhuma ordem bump" />
    </div>
  )
}