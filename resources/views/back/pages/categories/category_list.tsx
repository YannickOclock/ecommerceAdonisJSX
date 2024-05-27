import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { Vite } from '#resources/helpers/asset'
import { Admin } from '#viewsback/layouts/admin'
import { randomUUID } from 'node:crypto'
import { PublicImage } from '../../components/utils/image.tsx'
import { route } from '#start/view'

interface CategoryListProps {
  categories: AdminCategoryListQueryResult
}

export function CategoryList(props: CategoryListProps) {
  const { categories } = props
  const random = randomUUID()
  return (
    <Admin
      title={'Administration - Liste des catégories'}
      breadcrumb="Catalogue &gt; Catégories"
      header="Liste des catégories"
      bodyTitle="Liste des catégories"
    >
      <>
        <Vite.Script
          type="module"
          src={`resources/assets/back/js/components/check_to_switch_btn.ts?random=${random}`}
        />
        <div class="relative">
          <button class="btn btn-bulk-action">
            Actions groupées
            <i class="material-icons">expand_more</i>
          </button>
          <div class="dropdown bulk-dropdown" style="display: none">
            <a href="#" class="btn btn-delete" data-href="" data-action="PUT" data-token="">
              <i class="material-icons">delete</i>
              Supprimer la sélection
            </a>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Photo</th>
              <th>Nom</th>
              <th>En ligne</th>
              <th>Parent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr data-id="1">
                <td>
                  <div class="checkbox-js">
                    <div class="bulk"></div>
                  </div>
                </td>
                <td>{category.id}</td>
                <td>
                  <PublicImage
                    src={category.imagePath ?? ''}
                    alt={`Image principale du produit ${category.name}`}
                    type="category"
                  />
                </td>
                <td>{category.name}</td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={category.published ? true : false}
                      data-href={route('admin.category.switch', { id: category.id })}
                      id="switch1"
                      disabled
                    />
                    <label class="form-check-label" for="switch1"></label>
                  </div>
                </td>
                <td>{category.parent?.name}</td>
                <td class="td-flex">
                  <a href={route('admin.category.edit', { id: category.id })} class="btn">
                    <i class="material-icons">edit</i>
                  </a>
                  <a href="" class="btn btn-dropdown">
                    <i class="material-icons">more_vert</i>
                  </a>
                  <div class="dropdown">
                    <a href="#" class="btn btn-delete">
                      <i class="material-icons">delete</i>
                      Supprimer
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </Admin>
  )
}
