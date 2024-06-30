import { Base } from '#viewsfront/layouts/base'
import { CategoryRepositoryResult } from '#front/category/repositories/category_repository'
import { route } from '#start/view'
import { categoryImagesMinSrc, productImagesMinSrc } from '#resources/helpers/utils'
import { CategoryProductRepositoryResult } from '#front/category/repositories/category_product_repository'
import { ProductSample } from "#viewsfront/components/product_sample";

interface CategoryProductsProps {
  category: CategoryRepositoryResult
  products: CategoryProductRepositoryResult
}

export function CategoryProducts(props: CategoryProductsProps) {
  const { category, products } = props
  // todo: ne pas oublier de gérer le breadcrumb de façon récursif pour les catégories qui ont un grand parent
  return (
    <Base title={`Catégorie ${category.name}`} slider={true}>
      <>
        <div class="container">
          <section class="wrapper">
            <ol>
              <li>
                <a href="#">Accueil</a>
              </li>
              {category.parent && (
                <li>
                  <a href={route('front.category.show', { slug: category.parent.slug })}>
                    {category.parent.name}
                  </a>
                </li>
              )}
              <li>
                <a href={route('front.category.show', { slug: category.slug })}>{category.name}</a>
              </li>
            </ol>
            <section class="flex">
              <div class="left_column">
                <div class="block_white block_category">
                  <h5>{category.name}</h5>
                  {category.subCategories.map((subCategory) => (
                    <li>
                      <a href={route('front.category.show', { slug: subCategory.slug })}>
                        {subCategory.name}
                      </a>
                    </li>
                  ))}
                </div>
              </div>
              <div class="right_column">
                <div class="block_white block_category_desc">
                  <h5>{category.name}</h5>
                  <div class="flex">
                    <p>{category.description}</p>
                    {category.imagePath && (
                      <div>
                        <img
                          src={categoryImagesMinSrc(category.imagePath)}
                          alt={`Image principale de la catégorie ${category.name}`}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div class="form_product_order">
                  <div>
                    {products.length > 0 ? (
                      <span>
                        Il y a {products.length} produit{products.length > 1 && 's'}.
                      </span>
                    ) : (
                      <span>Il n'y a actuellement aucun produit dans cette catégorie !</span>
                    )}
                  </div>

                  <form>
                    <select class={'form-control my-2'}>
                      <option>Trier par pertinence</option>
                      <option>Trier par prix croissant</option>
                    </select>
                    <button class="btn btn-lg btn-primary mt-3" type="submit">
                      Trier
                    </button>
                  </form>
                </div>
                <div class="products">
                  <div class="thumbnails">
                    {products.map((product) => {
                      const { id, name, price } = product
                      const images = product.productImages.map((image) => image.path)
                      console.log(images)
                      return <ProductSample id={id} name={name} price={price} images={images} />
                    })}
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </>
    </Base>
  )
}
