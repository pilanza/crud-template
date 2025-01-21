import { Sidebar } from "@/components/dashboardComponents/sidebar/sidebar";

export const apiUrl = "http://localhost:3000/api"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={`grid gap-4 m-4 grid-cols-[220px,_1fr]`}>
        <Sidebar />
        <div className='bg-white rounded-lg pb-4 shadow h-[100vh]'>
          {children}
        </div>
      </div>
  )
}