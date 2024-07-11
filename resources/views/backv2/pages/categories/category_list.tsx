import { Admin } from '#viewsbackv2/layouts/admin'
import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { CategoryTable } from '#viewsbackv2/pages/categories/category_table'

interface CategoryListProps {
  categories: AdminCategoryListQueryResult
}

export function CategoryList(props: CategoryListProps) {
  const { categories } = props
  return (
    <Admin title={'Administration - Liste des catégories'}>
      <>
        <div class="p-4 border-b border-b-primary">
          <div class="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Catalogue</a>
              </li>
              <li>
                <a>Catégories</a>
              </li>
              <li>Liste des catégories</li>
            </ul>
          </div>
          <h1 class="text-2xl">Liste des catégories</h1>
        </div>
        <div class="p-4 pt-8">
          <CategoryTable categories={categories} />
        </div>
      </>
    </Admin>
  )
}
