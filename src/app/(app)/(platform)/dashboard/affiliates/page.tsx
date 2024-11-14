"use client";
/* eslint-disable @next/next/no-img-element */
import { Table } from '@/components/table';
import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import ActivesAffiliates from './modules/actives';
import RefusedAffiliates from './modules/refused';
import RequestAffiliates from './modules/request';

export default function Affiliates() {
  const [model, setModel] = useState("actives");

  const models = [
    {
      name: "actives",
      component: <ActivesAffiliates />
    },
    {
      name: "request",
      component: <RequestAffiliates />
    },
    {
      name: "refused",
      component: <RefusedAffiliates />
    }
  ]

  return (
    <div className="flex flex-col gap-4 mt-4 mt-0">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <h3 className="text-2xl font-semibold">Meus Afiliados</h3>
          <span 
          className="border border-border-primary text-icons-active bg-background-primary bg-opacity-50 px-4 py-1 flex items-center justify-center rounded-lg">
            0
        </span>
        </div>
        <button 
          className="flex justify-center inline-flex items-center max-[400px]:px-4 min-[400px]:px-10 py-0 text-sm font-medium text-white bg-green-400 rounded-lg">
            <SlidersHorizontal className="mr-2" height={14} />
          <p className='max-[400px]:hidden'>Filtrar</p>
        </button>
      </div>

      <ul className='flex border border-border-primary p-4 rounded-md'>
        <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "actives" && "text-text-secondary")} onClick={() => setModel("actives")}>Ativos</li>
        <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "request" && "text-text-secondary")} onClick={() => setModel("request")}>Solicitações</li>
        <li className={"cursor-pointer mx-2 cursor-pointer "+ (model !== "refused" && "text-text-secondary")} onClick={() => setModel("refused")}>Recusados</li>
      </ul>

      {models.filter(item => item.name === model)[0].component}
    </div>
  )
}