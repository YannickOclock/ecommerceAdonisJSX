import { Base } from '#viewsfront/layouts/base'
import { ProductSample } from '#viewsfront/components/product_sample'
import { Slider } from '#viewsfront/components/slider'
import { HomeProductListQueryResult } from '#app/front/home/repositories/product_repository'

interface HomeProps {
  products: HomeProductListQueryResult
}

export function Home(props: HomeProps) {
  const { products } = props

  return (
    <Base title={`Page d'accueil`}>
      <>
        <Slider />
        <div class="container">
          <section class="products">
            <h2>Produits populaires</h2>
            <div class="thumbnails">
              {products.map((product) => {
                const { id, name, price } = product
                const images = product.productImages.map((image) => image.path)
                return <ProductSample id={id} name={name} price={price} images={images} />
              })}
            </div>
          </section>
        </div>
      </>
    </Base>
  )
}
