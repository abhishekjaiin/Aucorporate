import { getSessionUser } from "@/lib/auth/session"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function SettingsPage() {
  const user = await getSessionUser()

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-bold text-[#081a42]">Settings</h1>

      <Card>
        <CardHeader><CardTitle>Account</CardTitle></CardHeader>
        <CardContent className="space-y-1 text-sm">
          <p><span className="text-gray-500">Name:</span> {user?.name}</p>
          <p><span className="text-gray-500">Email:</span> {user?.email}</p>
          <p><span className="text-gray-500">Role:</span> {user?.role}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Integrations</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Google Search Console — Not connected (Phase 2+)</li>
            <li>Bing Webmaster / IndexNow — Not connected (Phase 2+)</li>
            <li>GA4 — Not connected (Phase 2+)</li>
            <li>Microsoft Clarity — Not connected (Phase 2+)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
