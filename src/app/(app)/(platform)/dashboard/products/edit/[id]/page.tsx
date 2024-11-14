"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import General from "./modules/general";
import { useState } from "react";
import ConfigProductEdit from "./modules/config";
import OrderbumpProductEdit from "./modules/orderbump";
import CoProductionProductEdit from "./modules/coProduction";
import AffiliateProductEdit from "./modules/affiliate";

export default function Products() {
  const [model, setModel] = useState("general");

  const models = [
    {
      name: "general",
      component: <General />
    },
    {
      name: "config",
      component: <ConfigProductEdit />
    },
    {
      name: "orderbump",
      component: <OrderbumpProductEdit />
    },
    {
      name: "co-production",
      component: <CoProductionProductEdit />
    },
    {
      name: "affiliate",
      component: <AffiliateProductEdit />
    }
  ]

  return (
    <div className="flex flex-col gap-4 mt-4 lg:mt-0">
      <div className="flex gap-3 items-center">
        <h3 className="text-2xl font-semibold">Editar produto</h3>
      </div>

      <ul className='mt-4 mb-2 flex border border-border-primary p-4 rounded-md max-[640px]:block'>
        <li className={"mx-2 cursor-pointer "+ (model !== "general" && "text-text-secondary")} onClick={() => setModel("general")}>Geral</li>
        <li className={"mx-2 cursor-pointer "+ (model !== "config" && "text-text-secondary")} onClick={() => setModel("config")}>Configurações</li>
        <li className={"mx-2 cursor-pointer "+ (model !== "orderbump" && "text-text-secondary")} onClick={() => setModel("orderbump")}>Orderbump</li>
        <li className={"mx-2 cursor-pointer "+ (model !== "co-production" && "text-text-secondary")} onClick={() => setModel("co-production")}>Co-produção</li>
        <li className={"mx-2 cursor-pointer "+ (model !== "affiliate" && "text-text-secondary")} onClick={() => setModel("affiliate")}>Afiliação</li>
      </ul>
      
      {models.filter(item => item.name === model)[0].component}
    </div>
  )
}