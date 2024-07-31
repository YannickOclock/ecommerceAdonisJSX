import { Admin } from '#viewsback/layouts/admin'
import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { CategoryTable } from '#viewsback/pages/categories/category_table'
import { route } from '#start/view'

interface CategoryListProps {
  categories: AdminCategoryListQueryResult
  parentId: string | null
}

export function CategoryList(props: CategoryListProps) {
  const { categories, parentId } = props

  // todo il faut faire la même chose de façon récursive
  let subBreadcrumb
  if (parentId) {
    subBreadcrumb = (
      <li>
        <a href={route('admin.category.list', { parentId: parentId })}>
          {categories[0].parent.name}
        </a>
      </li>
    )
  }

  return (
    <Admin title={'Administration - Liste des catégories'}>
      <>
        <div class="p-4 border-b border-b-primary">
          <div class="breadcrumbs text-sm">
            <ul>
              <li>
                <a href="#">Catalogue</a>
              </li>
              <li>
                <a href={route('admin.category.list')}>Catégories</a>
              </li>
              {subBreadcrumb}
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
