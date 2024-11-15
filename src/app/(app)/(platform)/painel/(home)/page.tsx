"use client";
/* eslint-disable @next/next/no-img-element */
import { Table } from '@/components/table';
import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import ActivesAffiliates from './modules/actives';
import RefusedAffiliates from './modules/refused';
import RequestAffiliates from './modules/request';

export default function Affiliates() {
  const [model, setModel] = useState("Ativos");

  const models = [
    {
      name: "Ativos",
      component: <ActivesAffiliates />
    },
    {
      name: "Requisições",
      component: <RequestAffiliates />
    },
    {
      name: "Recusados",
      component: <RefusedAffiliates />
    }
  ]

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <h3 className="text-2xl font-semibold">Meus Afiliados</h3>
        </div>
        <button 
          className="flex justify-center inline-flex items-center max-[400px]:px-4 min-[400px]:px-10 py-0 text-sm font-medium text-white bg-green-400 rounded-lg">
            <SlidersHorizontal className="mr-2" height={14} />
          <p className='max-[400px]:hidden'>Filtrar</p>
        </button>
      </div>

      <ul className='flex border border-border-primary p-4 rounded-md'>
        <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "Ativos" && "text-text-secondary")} onClick={() => setModel("Ativos")}>Ações</li>
        <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "Requisições" && "text-text-secondary")} onClick={() => setModel("Requisições")}>Crypto Moedas</li>
        <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "Recusados" && "text-text-secondary")} onClick={() => setModel("Recusados")}>FLLS</li>
      </ul>

      {models.filter(item => item.name === model)[0].component}
    </div>
  )
}