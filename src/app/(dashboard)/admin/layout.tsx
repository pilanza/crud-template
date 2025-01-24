import { Sidebar } from "@/components/dashboardComponents/sidebar/sidebar";

export const apiUrl = "http://localhost:3000/api"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={`md:grid md:gap-4 md:m-4 md:grid-cols-[220px,_1fr]`}>
        <Sidebar />
        <div className='bg-white rounded-lg pb-4 shadow h-[100vh]'>
          {children}
        </div>
      </div>
  )
}