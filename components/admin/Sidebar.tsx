"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import {
  LayoutDashboard,
  FileText,
  Users,
  FolderTree,
  KeyRound,
  Network,
  Activity,
  Settings,
  LogOut,
} from "lucide-react"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Authors", href: "/admin/authors", icon: Users },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Keywords", href: "/admin/keywords", icon: KeyRound },
  { label: "Topic Clusters", href: "/admin/topic-clusters", icon: Network },
  { label: "SEO Health", href: "/admin/seo-health", icon: Activity },
  { label: "Settings", href: "/admin/settings", icon: Settings },
]

export function Sidebar({ userName, userRole }: { userName: string; userRole: string }) {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r bg-white">
      <div className="border-b px-5 py-5">
        <p className="text-sm font-bold text-[#081a42]">AU Corporate</p>
        <p className="text-xs text-gray-500">Content &amp; SEO Dashboard</p>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active ? "bg-[#081a42] text-white" : "text-gray-600 hover:bg-gray-100 hover:text-[#081a42]",
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t px-5 py-4">
        <p className="truncate text-sm font-medium text-gray-800">{userName}</p>
        <p className="text-xs text-gray-500">{userRole}</p>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="mt-3 flex items-center gap-2 text-sm text-gray-500 hover:text-red-600"
        >
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sign out
        </button>
      </div>
    </aside>
  )
}
