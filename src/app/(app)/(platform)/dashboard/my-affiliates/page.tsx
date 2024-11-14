"use client"
/* eslint-disable @next/next/no-img-element */
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type ProductType = {
  name: string;
  description: string;
  price: string;
  big_price: string;
}

export default function MyAffiliates() {
  const [affiliates, setAffiliates] = useState<Array<ProductType>>([]);

  useEffect(() => {
    setAffiliates([ ])
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-4 lg:mt-0">
      <div className="flex gap-3 items-center">
        <h3 className="text-2xl font-semibold">Minhas Afiliações</h3>
        <span 
          className="border border-border-primary text-icons-active bg-background-primary bg-opacity-50 px-4 py-1 flex items-center justify-center rounded-lg">
            0
        </span>
      </div>
      
      <div className="flex items-center bg-background-primary bg-opacity-50 border border-border-primary text-white rounded-md mb-9">
        <div className="pl-3">
          <Search size={20} />
        </div>
        <input className="bg-transparent py-4 focus:outline-none pl-2 text-white w-full" type="text" placeholder="Buscar pelo nome do produto" />
        <button className="bg-button-primary hover:bg-button-hover text-white font-bold py-4 px-4 lg:py-4 lg:px-8 rounded-r-md">
          Pesquisar
        </button>
      </div>

      {
        affiliates && (
          <div className="grid grid-cols-3 gap-4">
            {
              affiliates.map((item, index) => (
                <div key={index} className="max-w-sm bg-background-primary bg-opacity-50 border border-border-primary text-white rounded-md">
                  <div className="m-5 border border-border-primary rounded-md flex items-center justify-center">
                    <img 
                      className="rounded-t-lg" 
                      src="https://static.vecteezy.com/system/resources/thumbnails/018/742/236/small/3d-minimal-product-delivery-motorbike-with-cardboxes-3d-illustration-free-png.png" 
                      alt="" 
                    />
                  </div>
                  <div className="pl-5 pr-5 pb-5">
                    <div>
                      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                      <p className="text-text-secondary">{item.description}</p>
                    </div>
                    <div className="flex flex-col mt-4">
                      <span className="text-sm">Receba até</span>
                      <h3 className="text-2xl text-green-400 font-semibold">{item.price}</h3>
                      <p className="text-sm">Preço máximo: {item.big_price}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
      {
        affiliates.length === 0 && (
          <div className="flex flex-col justify-center inline-flex items-center w-full py-10">
            <Image src="/no-sells.svg" width={200} height={200} alt="Nenhuma venda" />
            <p className="mt-4 text-text-secondary">Você não tem nenhuma afiliação</p>
          </div>
        )
      }

    </div>
  )
}