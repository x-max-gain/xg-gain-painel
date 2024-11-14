import { Table } from "@/components/table";

export default function AnticipationsFinancial() {
  return (
    <Table body={[]} header={[
      {
        label: "DATA",
        children: (data: any) => data.date
      },
      {
        label: "VALOR A RECEBER",
        children: (data: any) => data.value
      },
      {
        label: "STATUS",
        children: (data: any) => data.status
      }
    ]} notfoundMessage="Você não tem nenhuma antecipação" />
  )
}