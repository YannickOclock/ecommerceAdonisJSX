import { Admin } from '#viewsback/layouts/admin'

export function Dashboard() {
  return (
    <Admin
      title={'Administration - Accueil'}
      breadcrumb="Tableau de bord"
      header="Administration"
      bodyTitle="Page d'administration générale"
    >
      <p>Contenu de la partie administration</p>
    </Admin>
  )
}
