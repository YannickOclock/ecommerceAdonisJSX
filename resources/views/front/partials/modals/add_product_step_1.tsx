import { csrfField } from '#resources/helpers/csrf_field'
import { Master } from '#viewsfront/layouts/master'

export function AddProductStep1() {
  return (
    <Master>
      <div id="master">
        <h1>Première étape d'ajout du panier</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus placeat
          perferendis, iusto corporis unde quae delectus, voluptatem quos molestias minima saepe
          quibusdam debitis nihil? Maxime maiores nostrum cumque omnis. In eum vitae delectus, rem
          adipisci quos dolore sint sed, culpa eius minima omnis incidunt rerum illum odio nisi quas
          eveniet deleniti?
        </p>
        <form action="/step1" method="post" up-submit>
          {csrfField()}
          <input type="text" name="quantity" placeholder="Quantité" />
          <button type="submit">Ajouter au panier</button>
        </form>
        <a href="#" up-dismiss>
          Fermer
        </a>
      </div>
    </Master>
  )
}
