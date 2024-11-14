"use client";
import { Table } from '@/components/table';

export default function RequestAffiliates() {
  const formHeader = [
    {label: "NOME", children: (row: any) => row.name}, 
    {label: "PRODUTO", children: (row: any) => row.product}, 
    {label: "COMISSÃO", children: (row: any) => row.comissao}, 
    {label: "CPF/CNPJ", children: (row: any) => row.cpf}, 
    {label: "EMAIL", children: (row: any) => row.email}, 
    {label: "AÇÕES", children: (row: any) => <></>},
  ];

  return (
    <Table header={formHeader} body={[]} notfoundMessage="Você não tem nenhum solicitação" />
  )
}