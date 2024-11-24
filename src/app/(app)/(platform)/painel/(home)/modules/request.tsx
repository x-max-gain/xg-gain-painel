"use client";
import { Table } from '@/components/table';


const dataContent = [
  {
    content: [
      {
          images: {
            logo: "https://...",
          },
          name: "Bitcoin",
          value: {
            price: 123.900,
            currency: 'us'
          },
          projection: "190",
          updatedAt: ""
      }
    ],
    pageCurrent: 1,
    pageMax: 5,
    documentPage: 50,
    documents: 201
  },
  {
    content: [
      {
          images: {
            logo: "https://...",
          },
          name: "Bitcoin",
          value: {
            price: 123.900,
            currency: 'us'
          },
          projection: "190",
          updatedAt: ""
      }
    ],
    pageCurrent: 1,
    pageMax: 5,
    documentPage: 50,
    documents: 201
  },
  {
    content: [
      {
          images: {
            logo: "https://...",
          },
          name: "Bitcoin",
          value: {
            price: 123.900,
            currency: 'us'
          },
          projection: "190",
          updatedAt: ""
      }
    ],
    pageCurrent: 1,
    pageMax: 5,
    documentPage: 50,
    documents: 201
  }
];

const bodyData = dataContent.flatMap((data, index) => 
  data.content.map((item) => ({
    number: index + 1,
    name: item.name,
    value: `${item.value.price} ${item.value.currency.toUpperCase()}`,
    projection: item.projection,
    updated: item.updatedAt || "Não atualizado",
  }))
);

export default function RequestAffiliates() {
  const formHeader = [
    {label: "N°", children: (row: any) => row.number}, 
    {label: "NOME", children: (row: any) => row.name}, 
    {label: "VALOR", children: (row: any) => row.value}, 
    {label: "PROJECAO", children: (row: any) => row.projection}, 
    {label: "ATUALIZADO", children: (row: any) => row.updated}, 
  ];

  return (
    <Table header={formHeader} body={bodyData} notfoundMessage="Você não tem nenhum solicitação" />
  )
}