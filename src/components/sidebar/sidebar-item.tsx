'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

interface ISidebarItem {
  icon: React.ReactNode;
  name: string;
  url: string;
}

export function SidebarItem({ item }: { item: ISidebarItem }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Item item={item} />
    </Suspense>
  )
}

function Item({ item }: { item: ISidebarItem }) {

  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "bg-background-secondary rounded-lg !text-icons-active !font-medium" : "";
  };

  return (
    <Link href={item.url}>
      <li className={`flex gap-3 items-center px-4 py-2 hover:text-text-secondary hover:font-medium text-icons-primary ${isActive(item.url)}`}>

        <div className="bg-icons-background h-9 w-9 flex items-center justify-center rounded-lg">
          {item.icon}
        </div>

        {item.name}
      </li>
    </Link>
  )
}