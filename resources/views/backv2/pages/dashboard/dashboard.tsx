import { Admin } from '#viewsbackv2/layouts/admin'

export function Dashboard() {
  return (
    <Admin>
      <>
        <div class="p-4 border-b border-b-primary">
          <div class="breadcrumbs text-sm">
            <ul>
              <li>
                <a>Tableau de bord</a>
              </li>
            </ul>
          </div>
          <h1 class="text-2xl">Tableau de bord</h1>
        </div>
        <div class="p-4 pt-8">
          <p>Contenu de la partie administration</p>
        </div>
      </>
    </Admin>
  )
}
