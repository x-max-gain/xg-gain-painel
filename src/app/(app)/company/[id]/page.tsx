import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Navbar } from "@/components/navbar/navbar";

export default function Company(){
  return(
    <main className="flex min-h-screen flex-grow">
    <Sidebar />
    
    <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
    
      <Navbar />
    
      <div className="flex flex-grow flex-col px-4 pb-6 @container md:px-5 lg:px-6 lg:pb-8 3xl:px-8 4xl:px-10 4xl:pb-9">
          <div>
            <div className="bg-background-secondary h-44">
            </div>
            <div className=" w-screen flex">
              <div className="-mt-[90px] h-auto md:h-5/6 w-8/12 flex flex-col md:flex-row gap-3 justify-items-center justify-center  px-4">
                <div className="bg-background-primary h-full w-full max-w-2xl">
                    <div className="flex justify-items-center p-4 gap-3">
                      <div className="flex">
                        <Image src="https://logicc-tecnologia-s3.s3.amazonaws.com/system/user_default.webp" alt="User" width={140} height={140} />
                      </div>
                      <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                              <h1 className="text-2xl">Lauricio de sousa</h1>
                              <p>cnpj: 048739874/8822</p>
                              <p>Melhor programador do universo</p>
                            </div>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 overflow-x-hidden">
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
                    <div className="flex flex-col p-4 gap-2">
                      <div className="border border-gray-700 p-2">
                        <h3>Ultimas Notícias</h3>
                        <div >
                          <p className="text-text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo voluptatum, eveniet quasi suscipit, aliquam alias tempora aspernatur sed ut culpa voluptatem eligendi nisi error, nulla ab odit. Aut, fugiat!</p>
                        </div>
                      </div>
                      <div className="border border-gray-700 p-2">
                        <h3>Ultimas Notícias</h3>
                        <div >
                          <p className="text-text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo voluptatum, eveniet quasi suscipit, aliquam alias tempora aspernatur sed ut culpa voluptatem eligendi nisi error, nulla ab odit. Aut, fugiat!</p>
                        </div>
                      </div>
                    
                    </div>
                  
    
                </div>
                <div className="h-auto w-72 md:max-max-w-sm max-w-md bg-background-primary">
                
                <div className="flex flex-col p-4 gap-2">
                <div className="flex gap-3">
                    <div className="w-36 h-20 bg-white"></div>
                    <div className="w-36 h-20 bg-white"></div>
                    <div className="w-36 h-20 bg-white"></div>
                    <div className="w-36 h-20 bg-white"></div>
                  </div>
                      <div className="border border-gray-700 p-2">
                        <h3>Ultimas Notícias</h3>
                        <div >
                          <p className="text-text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo voluptatum, eveniet quasi suscipit, aliquam alias tempora aspernatur sed ut culpa voluptatem eligendi nisi error, nulla ab odit. Aut, fugiat!</p>
                        </div>
                      </div>
                      <div className="border border-gray-700 p-2">
                        <h3>Ultimas Notícias</h3>
                        <div >
                          <p className="text-text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo voluptatum, eveniet quasi suscipit, aliquam alias tempora aspernatur sed ut culpa voluptatem eligendi nisi error, nulla ab odit. Aut, fugiat!</p>
                        </div>
                      </div>
                      <div className="border border-gray-700 p-2">
                        <h3>Ultimas Notícias</h3>
                        <div >
                          <p className="text-text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo voluptatum, eveniet quasi suscipit, aliquam alias tempora aspernatur sed ut culpa voluptatem eligendi nisi error, nulla ab odit. Aut, fugiat!</p>
                        </div>
                      </div>
                    
                    </div>
                </div>
              </div>
            </div>
    
          </div>
        </div>
    </div>
    </main>
  )
}






