import { Master } from '#viewsfront/layouts/master'

export function AddProductStep2() {
  return (
    <Master>
      <div id="master">
        <h1>Deuxième étape d'ajout du panier</h1>
        <p>
          adipisci quos dolore sint sed, culpa eius minima omnis incidunt rerum illum odio nisi quas
          eveniet deleniti?
        </p>
        <a href="/step1" up-target="body">
          Aller à l'étape précédente
        </a>
        <a href="#" up-dismiss>
          Fermer
        </a>
      </div>
    </Master>
  )
}
