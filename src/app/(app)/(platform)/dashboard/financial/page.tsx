"use client";
import { Card } from "@/components/card";
import { useState } from "react";
import { TriangleAlert } from 'lucide-react';
import ExtractFinancial from "./modules/extract";
import FessFinancial from "./modules/fees";
import AnticipationsFinancial from "./modules/anticipations";
import AccountFinancial from "./modules/account";

export default function Financial() {
  const [model, setModel] = useState("extract");

  const models = [
    {
      name: "extract",
      component: <ExtractFinancial />
    },
    {
      name: "anticipations",
      component: <AnticipationsFinancial />
    },
    {
      name: "account",
      component: <AccountFinancial />
    },
    {
      name: "fees",
      component: <FessFinancial />
    }
  ]
  return (
    <div className="flex flex-col gap-4 mt-4 mt-0">
      <div className="flex gap-3 items-center">
        <h3 className="text-2xl font-semibold">Financeiro</h3>
      </div>

      <div className="grid grid-cols-3 gap-4 max-[1024px]:grid-cols-1">
        <div className="col-span-2">
          <Card title="Disponível para saque" type="money" value="72000" />
          <div className="grid grid-cols-2 gap-4 mt-4 max-[640px]:grid-cols-1">
            <Card title="Saldo pendente" type="money" value="1479330" />
            <Card title="Reserva financeira" type="money" value="221290" />
          </div>
          <ul className='flex border border-border-primary p-4 rounded-md mt-4'>
            <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "extract" && "text-text-secondary")} onClick={() => setModel("extract")}>Extrato</li>
            <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "anticipations" && "text-text-secondary")} onClick={() => setModel("anticipations")}>Antecipações</li>
            <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "account" && "text-text-secondary")} onClick={() => setModel("account")}>Contas</li>
            <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "fees" && "text-text-secondary")} onClick={() => setModel("fees")}>Taxas</li>
          </ul>
          {models.filter(item => item.name === model)[0].component}
        </div>
        <div className="border border-gray-700 col-span-1 p-5 rounded-md">
          <p className="text-text-secondary">Solicitar saque</p>
          <div className="mt-1 flex border border-yellow-500 rounded-md p-2 bg-gray-300 mb-4">
            <div className="flex items-center mr-2">
              <span className="bg-yellow-400 p-1 rounded-md flex items-center justify-center">
                <TriangleAlert />
              </span>
            </div>
            <div>
              <h5 className="text-black font-medium">O dinheiro cairá em até 1 dia útil.</h5>
              <p className="text-black text-sm">Horário de recebimentos: 08h até 18h</p>
            </div>
          </div>
          <p>Selecione a conta</p>
          <select name="" id="" className="mt-1 bg-transparent py-2 focus:outline-none pl-2 text-white w-full border border-gray-700 rounded-md">
            <option value="">Selecione ou cadastre uma conta</option>
          </select>
          <p className="mt-4">Valor do saque</p>
          <input type="text" placeholder="R$ 0,00" className="mt-1 bg-transparent py-2 focus:outline-none pl-2 text-white w-full border border-gray-700 rounded-md" />

          <div className="my-4">
            <p className="text-text-secondary">Saldo da conta: <span className="text-white-300 text-lg">R$ 720,00</span></p>
            <p className="text-text-secondary">Taxa de saque: <span className="text-red-300 text-lg">R$ 4,00</span></p>
            <p className="text-text-secondary">Valor líquido do saque: <span className="text-green-300 text-lg">R$ 0,00</span></p>
          </div>

          <p>Digite sua senha</p>
          <div className="flex border border-gray-700 rounded-md mt-1">
            <input type="text" placeholder="Digite sua senha aqui" className="bg-transparent py-2 focus:outline-none pl-2 text-white w-full"  />
            <span></span>
          </div>
          <div className="flex mt-5">
            <a 
              href={`/dashboard/product/`} 
              className="w-full mb-2 flex justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-500 rounded-lg">
              Solicitar saque
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}