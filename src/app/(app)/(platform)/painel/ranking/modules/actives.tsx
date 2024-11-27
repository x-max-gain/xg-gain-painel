"use client";
import { Table } from '@/components/table';
import Link from 'next/link';

export default function ActivesAffiliates() {
  const formHeader = [
    {label: "N°", children: (row: any) => row.number}, 
    {label: "NOME", children: (row: any) => row.name}, 
    {label: "VALOR", children: (row: any) => row.value}, 
    {label: "PROJECAO", children: (row: any) => row.projection}, 
    {label: "ATUALIZADO", children: (row: any) => row.updated}, 
  ];

  return (
    <Table header={formHeader} body={[]}  notfoundMessage="Você não tem nenhum afiliado" />
  )
}