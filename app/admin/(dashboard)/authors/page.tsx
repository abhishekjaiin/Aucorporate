import { listAuthors } from "@/lib/actions/taxonomy"
import { AuthorManager } from "@/components/admin/AuthorManager"

export default async function AuthorsPage() {
  const authors = await listAuthors()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#081a42]">Authors</h1>
        <p className="mt-1 text-sm text-gray-500">Only enter legitimate AU Corporate team members — never invented bylines.</p>
      </div>
      <AuthorManager initialAuthors={authors} />
    </div>
  )
}
