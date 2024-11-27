import { Navbar } from "@/components/navbar/navbar";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-grow">
      <Sidebar />

      <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">

        <Navbar />

        <div className="pt-4 flex flex-grow flex-col px-4 pb-6 @container md:px-5 lg:px-6 lg:pb-8 3xl:px-8 4xl:px-10 4xl:pb-9">
          {children}
        </div>
      </div>
    </main>
  )
}