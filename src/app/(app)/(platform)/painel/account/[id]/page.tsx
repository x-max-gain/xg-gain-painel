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
        <div className="p-4 flex flex-col flex-wrap w-full justify-between sm:flex-row sm:w-full">
          <div className="h-auto w-full max-w-[100%] sm:max-w-[74.5%]">

            <div className="bg-background-deep rounded-md p-4">
              <div className="flex flex-col gap-2 sm:gap-4 sm:flex-row ">
                <Image
                  src="https://logicc-tecnologia-s3.s3.amazonaws.com/system/user_default.webp"
                  alt="User"
                  className="object-cover mr-4 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col">
                  <h1 className="text-5md sm:text-2xl ">Lauricio De Sousa Oliveira</h1>
                  <p className="text-xs sm:text-base">CPF: 043.921.432.01</p>
                  <p className="text-xs sm:text-base">EMAIL: developerwebmasterpro@gmail.com</p>
                  <p className="text-xs sm:text-base">TELEFONE: (63) 99999-9090</p>
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
          <div className="w-full h-auto max-w-1/4 sm:max-w-[24.5%]">
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
