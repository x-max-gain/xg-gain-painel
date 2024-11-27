import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Navbar } from "@/components/navbar/navbar";
import VideoCarousel from "@/components/carroussel/Carrousel";
import Carrousel from "@/components/carroussel/Carrousel";



export default function Account() {
  return (
    <div className="bg-background-primary">
      <div className="flex justify-center">
        <div className="p-4 flex w-full justify-between">
          <div className="h-auto" style={{ width: "74.5%"}}>
            {/* PROFILE */}
            <div className="bg-background-deep rounded-md p-4">
              <div className="flex">
                <Image
                  src="https://logicc-tecnologia-s3.s3.amazonaws.com/system/user_default.webp"
                  alt="User"
                  className="object-cover mr-4"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl">Lauricio De Sousa Oliveira</h1>
                  <p>CPF: 043.921.432.01</p>
                  <p>EMAIL: developerwebmasterpro@gmail.com</p>
                  <p>TELEFONE: (63) 99999-9090</p>
                </div>
              </div>
            
            </div>
            <div className="bg-background-deep rounded-md mt-4">
              <h2 className="px-4 py-2"><strong>Resumo do periodo</strong></h2>
              <div className="flex px-4 overflow-x-hidden">
              </div>
            </div>
           
            {/* ESTATÍSTICAS */}
            <div className="bg-background-deep rounded-md mt-4 flex flex-col p-4 gap-2">
              <h2 className="px-4 py-2"><strong>Detalhes do bots</strong></h2>
              <div className="flex px-4 overflow-x-hidden">
                
              </div>
            </div>
        
          </div>
          <div className="w-1/4 h-auto" style={{ width: "24.5%"}}>
            <div className="bg-background-deep rounded-md p-4 mt-4">
              <h2 className="px-4 py-2"><strong>Lista de depósitos</strong></h2>
              <div className="px-4 w-full">
                
              </div>
            </div>
            <div className="bg-background-deep rounded-md p-4 mt-4">
              <h2 className="px-4 py-2"><strong>Lista de saques</strong></h2>
              <div className="px-4 w-full">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
