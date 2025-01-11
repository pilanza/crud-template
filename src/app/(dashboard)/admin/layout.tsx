import { Sidebar } from "lucide-react";
import { Inter } from "next/font/google"

const inter = Inter({subsets: ["latin"]});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} text-stone-950 bg-stone-100 grid gap-4 p-4 grid-cols-[220px,_1fr]`}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}