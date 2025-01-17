import { Sidebar } from "@/components/dashboardComponents/sidebar/sidebar";
import { Inter } from "next/font/google"

const inter = Inter({subsets: ["latin"]});

export const apiUrl = "http://localhost:3000/api"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={`${inter.className} text-stone-950 bg-stone-100 grid gap-4 m-4 grid-cols-[220px,_1fr]`}>
        <Sidebar />
        <div className='bg-white rounded-lg pb-4 shadow h-[200vh]'>
          {children}
        </div>
      </div>
  )
}