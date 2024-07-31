import { Admin } from '#viewsback/layouts/admin'
import { Table } from '#viewsback/components/table'

export function Test() {
  return (
    <Admin>
      <>
        <div class="p-4 border-b border-b-primary">
          <div class="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Catalogue</a>
              </li>
              <li>
                <a>Produits</a>
              </li>
              <li>Liste des produits</li>
            </ul>
          </div>
          <h1 class="text-2xl">Liste des produits</h1>
        </div>
        <div class="p-4 pt-8">
          <Table />
        </div>
      </>
    </Admin>
  )
}
