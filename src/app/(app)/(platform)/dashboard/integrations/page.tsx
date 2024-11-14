"use client";
import Image from "next/image";
import { useEffect, useState } from "react"
import { Plus } from 'lucide-react';

type IntegrationType = {
  name: string;
  description: string
}
export default function Integrations() {
  const [integrations, setIntegrations] = useState<Array<IntegrationType>>();

  useEffect(() => {
    setIntegrations([
      {
        name: "Member Kit",
        description: "Área de membros externa e plataforma de conteúdos"
      }
    ])
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-4 lg:mt-0">
      <div className="flex lg:justify-between">
        <div className="flex gap-3 items-center">
          <h3 className="text-2xl font-semibold">Integrações</h3>
        </div>
      </div>

      <div className="grid gap-4 2xl:grid-cols-3 xl:grid-cols-3 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {
          integrations && integrations.map((item, index) => (
            <div key={index} className="p-3 max-w-sm bg-background-primary bg-opacity-50 border border-border-primary text-white rounded-md">
              <div className="flex lg:justify-between">
                <Image src="/memberkit.png" width={100} height={100} alt="Nenhuma venda" className="rounded-md" />
                <div>
                  <div className="bg-green-400 rounded-md p-1">
                    <Plus height={18} />
                  </div>
                </div>
              </div>
              <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white mt-2">
                {item.name}
              </h5>
              <p className="text-text-secondary mt-2">Área de membros externa e plataforma de conteúdos</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}