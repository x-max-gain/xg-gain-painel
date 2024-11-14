"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

function ConfigProductFaceEdit() {
  return (
    <div className="p-5">
      <div>
        <p className="mb-1">Pixel 1</p>
        <input className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="Ex.: 1424315238147187" />
      </div>
      <div>
        <p className="mb-1">Token da API de conversão 1</p>
        <input className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="Ex.: EAAGFxsCjw..." />
      </div>
      <div>
        <p className="mb-1">URL da página de vendas 1</p>
        <input className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="Inclua a URL VERDADEIRA da página de vendas." />
      </div>
      <div className="flex">
        <button 
          className="mb-2 flex justify-center inline-flex items-center px-5 py-2 text-lg font-medium text-white bg-green-500 rounded-lg">
          Adicionar outro
        </button>
        <p className="text-text-secondary ml-4 mt-2 text-sm">1 / 10</p>
      </div>
    </div>
  )
} 

export default function ConfigProductEdit() {
  const [model, setModel] = useState("face");

  const models = [
    {
      name: "face",
      component: <ConfigProductFaceEdit />
    },
    {
      name: "google",
      component: <ConfigProductFaceEdit />
    },
    {
      name: "analytic",
      component: <ConfigProductFaceEdit />
    },
    {
      name: "tiktok",
      component: <ConfigProductFaceEdit />
    },
    {
      name: "kway",
      component: <ConfigProductFaceEdit />
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-4 max-[1024px]:grid-cols-1">
        <div>
          <h3 className="font-bold">Pixels de conversão</h3>
          <p className="text-text-secondary mt-1 mb-4">Aprenda mais sobre os pixels de conversão</p>

          <div className="border border-gray-700 rounded-md">
            <ul className="flex border-b border-gray-700 max-[640px]:block">
              <li onClick={() => setModel("face")} className={`cursor-pointer w-full flex justify-center items-center mx-2 py-4 ${model === "face" && "border-b-2 border-white-700"}`}>
                <Image src="/social/facebook.png" height={20} width={20} className="mr-2" alt="" />
                <p>Face Ads</p>
              </li>
              <li onClick={() => setModel("google")} className={`cursor-pointer w-full flex justify-center items-center px-1 py-4 ${model === "google" && "border-b-2 border-white-700"}`}>
                <Image src="/social/google.png" height={20} width={20} className="mr-2" alt="" />
                <p>G Ads</p>
              </li>
              <li onClick={() => setModel("analytic")} className={`cursor-pointer w-full flex justify-center items-center px-1 py-4 ${model === "analytic" && "border-b-2 border-white-700"}`}>
                <Image src="/social/graphic.png" height={20} width={20} className="mr-2" alt="" />
                <p>G Analytics</p>
              </li>
              <li onClick={() => setModel("tiktok")} className={`cursor-pointer w-full flex justify-center items-center px-1 py-4 ${model === "tiktok" && "border-b-2 border-white-700"}`}>
                <Image src="/social/tiktok.png" height={20} width={20} className="mr-2" alt="" />
                <p>Tiktok</p>
              </li>
              <li onClick={() => setModel("kway")} className={`cursor-pointer w-full flex justify-center items-center px-1 py-4 ${model === "kway" && "border-b-2 border-white-700"}`}>
                <Image src="/social/kway.png" height={20} width={20} className="mr-2" alt="" />
                <p>kway</p>
              </li>
            </ul>
            <div className="p-5">
              <div>
                <p className="mb-1">Pixel 1</p>
                <input className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="Ex.: 1424315238147187" />
              </div>
              <div>
                <p className="mb-1">Token da API de conversão 1</p>
                <input className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="Ex.: EAAGFxsCjw..." />
              </div>
              <div>
                <p className="mb-1">URL da página de vendas 1</p>
                <input className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="Inclua a URL VERDADEIRA da página de vendas." />
              </div>
              <div className="flex">
                <button 
                  className="mb-2 flex justify-center inline-flex items-center px-5 py-2 text-lg font-medium text-white bg-green-500 rounded-lg">
                  Adicionar outro
                </button>
                <p className="text-text-secondary ml-4 mt-2 text-sm">1 / 10</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Fatura e boleto</h3>
          <p className="text-text-secondary mt-1 mb-4">Configurando o produto</p>
          <div className="border border-gray-700 p-5 rounded-md">
            <div>
              <p className="mb-1">Descrição na fatura do cartão</p>
              <div className="flex">
                <p className="mt-2 mr-2">ESCALAPAY*</p><input className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="Digite um nome" />
              </div>
            </div>
            <div>
              <p className="mb-1">Validade do boleto</p>
              <div className="flex">
                <input className="mr-2 mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="3" />
                <p>Dias corridos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}