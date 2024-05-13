import { Base } from '#viewsfront/layouts/base'
import { ProductSample } from '#viewsfront/components/product_sample'
import { Slider } from '#viewsfront/components/slider'

export function Home() {
  const products = [
    {
      id: 1,
      title: 'Mon produit',
      price: '100.00',
      images: [
        'resources/assets/front/images/affiche-adventure-medium.jpg',
        'resources/assets/front/images/affiche-adventure-medium.jpg',
      ],
    },
    {
      id: 2,
      title: 'Mon produit 2',
      price: '200.00',
      images: ['resources/assets/front/images/affiche-adventure-medium.jpg'],
    },
    {
      id: 3,
      title: 'Mon produit 3',
      price: '300.00',
      images: ['resources/assets/front/images/affiche-adventure-medium.jpg'],
    },
    {
      id: 4,
      title: 'Mon produit 4',
      price: '400.00',
      images: ['resources/assets/front/images/affiche-adventure-medium.jpg'],
    },
  ]

  return (
    <Base title={`Page d'accueil`}>
      <>
        <Slider />
        <section class="products">
          <h2>Produits populaires</h2>
          <div class="thumbnails">
            {products.map((product) => (
              <ProductSample {...product} />
            ))}
          </div>
        </section>
      </>
    </Base>
  )
}
