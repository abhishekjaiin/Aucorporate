import { listCategories } from "@/lib/actions/taxonomy"
import { CategoryManager } from "@/components/admin/CategoryManager"

export default async function CategoriesPage() {
  const categories = await listCategories()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#081a42]">Categories</h1>
      <CategoryManager initial={categories} />
    </div>
  )
}
