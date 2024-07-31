import { Master } from '#viewsbackv2/layouts/master'
import { AdminCategoryEditQueryResult } from '#admin/category/repositories/category_repository'
import { route } from '#start/view'

interface CategoryDeleteModaleProps {
  category: AdminCategoryEditQueryResult
}

export function CategoryDeleteModale(props: CategoryDeleteModaleProps) {
  const { category } = props
  return (
    <Master>
      <div class={'p-4'}>
        <h1 class={'text-2xl mb-4'}>Confirmation de suppression d'une catégorie</h1>
        <p>
          Vous êtes sur le point de supprimer la catégorie {category.name}. Êtes-vous sûr de vouloir
          continuer ?
        </p>
        <div class={'flex justify-evenly mt-8'}>
          <a class={'btn'} up-dismiss>
            Annuler
          </a>
          <a class={'btn btn-error'} href={route('admin.category.delete', { id: category.id })}>
            Supprimer
          </a>
        </div>
      </div>
    </Master>
  )
}
