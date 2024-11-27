"use client";
/* eslint-disable @next/next/no-img-element */
import { Table } from '@/components/table';
import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import ActivesAffiliates from './modules/actives';
import RefusedAffiliates from './modules/refused';
import RequestAffiliates from './modules/request';
import SignIn from '@/app/(app)/sign-in/page';

export default function Affiliates() {
  const [model, setModel] = useState("Ativos");
  const [userLogged, setUserLogged] = useState(true); 

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
  ];

  return (
    <div className="flex flex-col gap-4 mt-4 bg-background-primary p-4">
      {userLogged ? (
        <>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <h3 className="text-2xl font-semibold">Melhores Ativos</h3>
            </div>
          
          </div>

          <ul className='flex border border-border-primary p-4 rounded-md'>
            <li className={"cursor-pointer mx-2 "+ (model !== "Ativos" && "text-text-secondary")} onClick={() => setModel("Ativos")}>Ações</li>
            <li className={"cursor-pointer mx-2 "+ (model !== "Requisições" && "text-text-secondary")} onClick={() => setModel("Requisições")}>Crypto Moedas</li>
            <li className={"cursor-pointer mx-2 "+ (model !== "Recusados" && "text-text-secondary")} onClick={() => setModel("Recusados")}>FLLS</li>
          </ul>

          {models.filter(item => item.name === model)[0].component}
        </>
      ) : (
      <SignIn/>
      )}
    </div>
  );
}
