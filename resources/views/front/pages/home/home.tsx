import { Base } from '#viewsfront/layouts/base'

export function Home() {
  return (
    <Base title={`Page d'accueil`}>
      <section class="products">
        <h2>Produits populaires</h2>
      </section>
    </Base>
  )
}
