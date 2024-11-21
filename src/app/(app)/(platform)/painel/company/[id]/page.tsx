import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Navbar } from "@/components/navbar/navbar";

export default function Company() {
  return (
    <div className="bg-background-secondary">
      <div className="flex justify-center">
        <div className="p-4 flex w-full justify-between">
          <div className="h-auto" style={{ width: "74.5%"}}>
            {/* PROFILE */}
            <div className="bg-background-primary rounded-md p-4">
              <div className="flex">
                <Image
                  src="https://brandcenter.americanas.io/wp-content/uploads/2022/02/logo_2-01-e1658341093253.png"
                  alt="User"
                  className="object-cover mr-4"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl">LOJAS AMERICANAS S.A</h1>
                  <p>CNPJ: 33.014.556/1598-96</p>
                  <p>CRIAÇÃO: 23/01/2019</p>
                  <p>TELEFONE: (63) 99999-9090</p>
                </div>
              </div>
              <p className="mt-4">
                A Americanas S.A é uma varejista quase centenária e com presença em todo o país. 
                No top 10 de marcas mais influentes do ranking Ipsos de 2022, a Americanas é uma marca 
                reconhecida por milhões de brasileiros.
              </p>
            </div>
            {/* VÍDEOS */}
            <div className="bg-background-primary rounded-md mt-4">
              <h2 className="px-4 py-2"><strong>Informações</strong></h2>
              <div className="flex px-4 overflow-x-hidden">
                
              </div>
            </div>
            {/* VÍDEOS */}
            <div className="bg-background-primary rounded-md mt-4">
              <h2 className="px-4 py-2"><strong>Vídeos</strong></h2>
              <div className="flex px-4 overflow-x-hidden">
                <iframe
                  width="260"
                  height="170"
                  src="https://www.youtube.com/embed/cpRrxCwDBM8"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="260"
                  height="170"
                  src="https://www.youtube.com/embed/cpRrxCwDBM8"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="260"
                  height="170"
                  src="https://www.youtube.com/embed/cpRrxCwDBM8"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="260"
                  height="170"
                  src="https://www.youtube.com/embed/cpRrxCwDBM8"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  width="260"
                  height="170"
                  src="https://www.youtube.com/embed/cpRrxCwDBM8"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* ESTATÍSTICAS */}
            <div className="bg-background-primary rounded-md mt-4 flex flex-col p-4 gap-2">
              <h2 className="px-4 py-2"><strong>Estatísticas</strong></h2>
              <div className="flex px-4 overflow-x-hidden">
                
              </div>
            </div>
            {/* GRÁFICOS */}
            <div className="bg-background-primary rounded-md mt-4 flex flex-col p-4 gap-2">
              <h2 className="px-4 py-2"><strong>Gráficos</strong></h2>
              <div className="flex px-4 overflow-x-hidden">
                
              </div>
            </div>
          </div>
          <div className="w-1/4 h-auto" style={{ width: "24.5%"}}>
            {/* ESTATÍSTICAS */}
            <div className="bg-background-primary rounded-md p-4">
              <h2 className="px-4 py-2"><strong>Comentários</strong></h2>
              <div className="px-4 w-full">
                <ul className="h-96 overflow-y-auto">
                  <li>
                    <strong>Pedro alberto</strong>
                    <p>Muito bom</p>
                  </li>
                </ul>
                <div>
                  <input type="text" placeholder="Digite aqui" />
                </div>
              </div>
            </div>
            {/* PREVISÕES */}
            <div className="bg-background-primary rounded-md p-4 mt-4">
              <h2 className="px-4 py-2"><strong>Previsões</strong></h2>
              <div className="px-4 w-full">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}