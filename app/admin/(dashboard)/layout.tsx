import { redirect } from "next/navigation"
import { getSessionUser } from "@/lib/auth/session"
import { Sidebar } from "@/components/admin/Sidebar"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser()
  // Belt-and-suspenders: middleware already blocks this, but a layout-level
  // check means the page never even attempts to render without a session,
  // even if middleware config ever drifts.
  if (!user) redirect("/admin/login")

  return (
    <div className="flex min-h-screen">
      <Sidebar userName={user.name ?? user.email ?? "User"} userRole={user.role} />
      <main className="flex-1 overflow-y-auto p-6 sm:p-8">{children}</main>
    </div>
  )
}
