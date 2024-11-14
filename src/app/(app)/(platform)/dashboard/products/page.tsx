"use client"
/* eslint-disable @next/next/no-img-element */
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CirclePlus } from 'lucide-react';
import Link from "next/link";

type ProductType = {
  _id: string;
  name: string;
  image: string;
}

export default function Products() {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    setProducts([
      {
        _id: "s3d2d23d23d2d",
        name: "Nome do produto",
        image: "https://static.vecteezy.com/system/resources/thumbnails/018/742/236/small/3d-minimal-product-delivery-motorbike-with-cardboxes-3d-illustration-free-png.png"
      }
    ])
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-4 lg:mt-0">
      <div className="flex gap-3 items-center">
        <h3 className="text-2xl font-semibold">Produtos</h3>
        <span 
          className="border border-border-primary text-icons-active bg-background-primary bg-opacity-50 px-4 py-1 flex items-center justify-center rounded-lg">
            1
        </span>
      </div>
      
      <div className="flex mb-9">
        <div className="w-full flex items-center bg-background-primary bg-opacity-50 border border-border-primary text-white rounded-md ">
          <div className="pl-3">
            <Search size={20} />
          </div>
          <input className="bg-transparent py-1 focus:outline-none pl-2 text-white w-full" type="text" placeholder="Pesquise por CPF, e-mail ou nome" />
        </div>
        <div className="ml-4">
          <Link href="/dashboard/products/add" className="flex max-[640px]:w-auto w-60 bg-button-primary hover:bg-button-hover text-white font-bold px-4 py-4 px-8 rounded-md">
            <CirclePlus className="mr-1"/>
            <p className="max-[640px]:hidden">Adicionar produto</p>
          </Link>
        </div>
      </div>

      <div className="w-full grid 2xl:grid-cols-3 xl:grid-cols-3 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {
          products && products.map((item, index) => (
            <div key={index} className="max-w-sm bg-background-primary bg-opacity-50 border border-border-primary text-white rounded-md">
              <div className="m-5 border border-border-primary rounded-md flex items-center justify-center">
                <img 
                  className="rounded-t-lg" 
                  src={item.image} 
                  alt={`Imagem do produto ${item.name}`} 
                />
              </div>
              <div className="pl-5 pr-5 pb-5">
                <div className="flex justify-between mb-4">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <span className="rounded-lg bg-green-500 px-4 py-0 flex items-center">Ativo</span>
                </div>
                <div className="flex flex-col">
                  <a 
                    href={`/dashboard/product/${item._id}`} 
                    className="mb-2 flex justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg">
                    Editar
                  </a>
                  <a 
                    href={`/dashboard/product-offers/${item._id}`} 
                    className="flex justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg border border-border-primary">
                    Gerenciar Ofertas
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}