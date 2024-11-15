'use client'

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/sidebar";
import { NavbarMobile } from "./navbar-mobile";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center px-4 py-4 bg-background-primary lg:bg-transparent lg:backdrop-blur-xl md:px-5 lg:px-10 2xl:py-5 3xl:px-8 4xl:px-10">
        <div className="flex w-full max-w-2xl items-center">
        <Link href="/dashboard" className="flex w-full">
             <h2>X MAX GAIN</h2>
          </Link>
        {/*   <button
            onClick={toggleMenu}
            className="rizzui-action-icon-root inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 rounded-md hover:enabled:text-gray-1000 focus-visible:ring-gray-900/30 me-3 text-primary h-auto w-auto p-0 sm:me-4 xl:hidden" type="button">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        <div className="flex w-full items-center justify-end gap-10">
          <div className="mt-5 flex w-[180px] max-w-[200px] items-center md:w-full">
            <div className="flex w-full flex-col">
              <div className="-mt-6 ml-auto flex items-center justify-between text-sm font-semibold">
                <span className="mr-1 text-base">🚀</span>
                <span>R$ 927k / R$ 1M</span>
              </div>
              <div className="mt-1 w-full rounded-full bg-icons-background">
                <div className="h-2.5 rounded-full bg-background-green" style={{ width: "87.27%" }}></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Image src="https://logicc-tecnologia-s3.s3.amazonaws.com/system/user_default.webp" alt="User" width={40} height={40} className="rounded-full" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      <NavbarMobile isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  )
}
