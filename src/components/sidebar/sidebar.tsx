import Image from "next/image";
import Link from "next/link";
import { routes } from "./routes";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  return (
    <aside className="bg-black bottom-0 start-0 z-50 h-full w-[270px] 2xl:w-72 fixed hidden xl:block overflow-x-auto">
      <div className="sticky top-0 z-40 flex px-8 pt-4 bg-black">
         <Link href="/painel" className="flex w-full ">
             <h2>X MAX GAIN</h2>
          </Link>
      </div>

      <div>
        <ul className="flex flex-col p-4 mt-4 gap-1">
          {routes.map((route, index) => (
            <SidebarItem key={index} item={route} />
          ))}
        </ul>
      </div>
    </aside>
  )
}