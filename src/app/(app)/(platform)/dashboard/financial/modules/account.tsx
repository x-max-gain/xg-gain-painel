import { Table } from "@/components/table";

export default function AccountFinancial() {
  return (
    <Table body={[]} header={[
      {
        label: "BANCO",
        children: (data: any) => data.date
      },
      {
        label: "AGÊNCIA",
        children: (data: any) => data.value
      },
      {
        label: "CONTA",
        children: (data: any) => data.status
      },
      {
        label: "CHAVE PIX",
        children: (data: any) => data.status
      },
      {
        label: "STATUS",
        children: (data: any) => data.status
      },
      {
        label: "AÇÕES",
        children: (data: any) => <></>
      }
    ]} notfoundMessage="Você não tem nenhuma antecipação" />
  )
}