"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";


export default function Products() {
  return (
    <div className="flex flex-col gap-4 mt-4 mt-0">
      <div className="flex gap-3 items-center">
        <h3 className="text-2xl font-semibold">Cadastrar novo produto</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4 max-[1024px]:grid-cols-1">
        <div>
          <h3 className="font-bold">Dados gerais</h3>
          <p className="text-text-secondary mt-1 mb-4">Serão disponibilizadas para os compradores</p>

          <div className="border border-gray-700 p-5 rounded-md">
            <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
              <div>
                <p className="mb-1">Nome do produto</p>
                <input className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="Digite um nome" />
              </div>
              <div>
                <p className="mb-1">Categoria do produto</p>
                <select className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" name="" id="">
                  <option value="">Selecione a categoria</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
            <p className="mb-1">Descrição do produto</p>
              <textarea className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" placeholder="Digite um nome" ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
              <div>
                <p className="mb-1">Tipo do produto</p>
                <select className="border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" name="" id="">
                  <option value="">Selecione a categoria</option>
                </select>
              </div>
              <div>
                <p className="mb-1">URL da página de venda</p>
                <input className="border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="Digite um nome" />
              </div>
            </div>
          </div>

          <h3 className="font-bold mt-10">Imagem do produto</h3>
          <p className="text-text-secondary mt-1 mb-4">Os compradores irão ver o banner do produto</p>

          <div className="border border-gray-700 p-5 rounded-md">
            <div className="border border-gray-700 p-5 rounded-md cursor-pointer">
              <div className="flex items-center flex-col py-5">
                <Image src="/upload.png" className="mb-4" height={100} width={100} alt="Imagem de upload" />
                <p className="text-text-secondary">Clique aqui para selecionar a imagem</p>
              </div>
            </div>
            <p className="mt-2">Carregue a imagem em destaque do seu produto aqui. O tamanho da imagem não deve ser maior que <span className="font-bold">1 MB</span></p>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Entregável do produto</h3>
          <p className="text-text-secondary mt-1 mb-4">Acesso ao produto</p>
          <div className="border border-gray-700 p-5 rounded-md">
            <div>
              <p className="mb-1">Tipo de entrega do produto</p>
              <select className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" name="" id="">
                <option value="">Somente e-mail</option>
              </select>
            </div>
            <div>
              <p className="mb-1">Informação adicional e-mail após compra aprovada</p>
              <textarea className="h-36 mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" placeholder="Digite a informação adicional aqui" ></textarea>
            </div>
          </div>

          <h3 className="font-bold mt-10">Garantia e suporte</h3>
          <p className="text-text-secondary mt-1 mb-4">Os coompradores irão ver a garantia e o e-mail de suporte</p>

          <div className="border border-gray-700 p-5 rounded-md">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="mb-1">E-mail de suporte</p>
                <input className="mb-4 border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" type="text" placeholder="exemplo@gmail.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="mb-1">Garantia</p>
                <select className="border border-gray-700 bg-transparent py-2 rounded-md focus:outline-none pl-2 text-white w-full" name="" id="">
                  <option value="">7 Dias</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}