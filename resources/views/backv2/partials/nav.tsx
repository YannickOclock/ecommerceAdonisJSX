export function Nav() {
  return (
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <li>
        <a>Tableau de bord</a>
      </li>
      <li>
        <details open>
          <summary>
            <i class={'material-icons mi-store'}>store</i>
            Catalogue
          </summary>
          <ul>
            <li>
              <a>Produits</a>
            </li>
            <li>
              <a>Ajouter un produit</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Clients</a>
      </li>
    </ul>
  )
}
