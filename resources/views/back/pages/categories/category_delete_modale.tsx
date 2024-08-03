import { Master } from '#viewsback/layouts/master'
import { route } from '#start/view'
import { AdminCategoryByIdsQueryResult } from '#admin/category/repositories/category_repository'
import { csrfField } from '#resources/helpers/csrf_field'

interface CategoryDeleteModaleProps {
  categories: AdminCategoryByIdsQueryResult
}

export function CategoryDeleteModale(props: CategoryDeleteModaleProps) {
  const { categories } = props
  return (
    <Master>
      <div class={'p-4'}>
        <h1 class={'text-2xl mb-4'}>
          Confirmation de suppression{' '}
          {categories.length > 1 ? 'de plusieurs catégories' : "d'une catégorie"}
        </h1>
        <p>Vous êtes sur le point de supprimer le(s) catégorie(s) suivante(s) :</p>
        <ul class="list-disc ml-8">
          {categories.map((category) => (
            <li>{category.name}</li>
          ))}
        </ul>
        <p>Êtes-vous sûr de vouloir continuer ?</p>
        <div class={'flex justify-evenly mt-8'}>
          <a class={'btn'} up-dismiss>
            Annuler
          </a>
          <form method="post" action={route('admin.category.delete')}>
            {categories.map((category) => (
              <input type="hidden" name="ids[]" value={category.id} />
            ))}
            {csrfField()}
            <button class="btn btn-error">Supprimer</button>
          </form>
        </div>
      </div>
    </Master>
  )
}
