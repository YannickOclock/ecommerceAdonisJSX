import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { AdminProductEditQueryResult } from '#admin/product/repositories/product_repository'
import { Admin } from '#viewsback/layouts/admin'
import { PublicImage } from '#viewsback/components/utils/image'
import { Label } from '#viewsback/components/form/label'
import { Input } from '#viewsback/components/form/input'
import { route } from '#start/view'
import { convertPrice } from '#resources/helpers/utils'
import { Tab } from '#viewsback/components/tabs/tab'
import { TabList } from '#viewsback/components/tabs/tab_list'

interface ProductShowProps {
  product: AdminProductEditQueryResult
  categories: AdminCategoryListQueryResult
}

export function ProductShow(props: ProductShowProps) {
  const { product } = props

  console.log(product.productImages)

  return (
    <Admin classes={'relative min-h-[calc(100dvh-6rem)]'}>
      <div class="p-4 border-b border-b-primary">
        <div class="breadcrumbs text-sm">
          <ul>
            <li>
              <a>Catalogue</a>
            </li>
            <li>
              <a>Produits</a>
            </li>
            <li>Visualisation d'un produit</li>
          </ul>
        </div>
        <h1 class="text-2xl">Visualisation d'un produit</h1>
      </div>
      <div class="p-16 pt-8">
        {/* PARTIE HEADER - Les prix et le stock */}
        <div class="flex justify-end">
          <div class="border-b-primary border-b pb-2 flex gap-4">
            <div class="flex gap-2">
              <div class="badge badge-lg badge-neutral">00,00 €</div>
              <p>HT</p>
            </div>
            <div class="flex gap-2">
              <div class="badge badge-lg badge-neutral">{convertPrice(product.price)}</div>
              <p>TTC (règles de taxes : XX%)</p>
            </div>
            <div class="flex gap-2">
              <div class="badge badge-lg badge-primary">{product.stock}</div>
              <p>en stock</p>
            </div>
          </div>
        </div>
        {/* PARTIE HEADER - Nom du produit */}
        <div class="flex gap-8">
          <PublicImage
            src={product.productImages[0]?.path}
            alt={`Image principale du produit ${product.name}`}
            classes="h-36"
          />
          <div class={'grow'}>
            <Label id="name" label="Nom du produit" classes="block my-2" />
            <Input name="name" id="name" defaultValue={product.name} required classes="w-full" />
            <form
              method={'get'}
              action={route('admin.product.switch', { from: 'show', id: product.id })}
            >
              <div class="mt-4 flex gap-2" up-autosubmit>
                <input
                  type="checkbox"
                  class="toggle toggle-success"
                  name="published"
                  checked={!!product.published}
                />
                <Label id="published" label="En ligne" classes="" />
              </div>
            </form>
          </div>
        </div>
        {/* TABS */}
        <TabList>
          <Tab label="Description" checked={true}>
            <div class="border border-neutral p-4 h-52 flex gap-4">
              <div class="w-1/6 border border-neutral flex items-center justify-center">
                <i class="material-icons text-4xl">add_a_photo</i>
              </div>
              {product.productImages.map((image, index) => {
                console.log(image)
                return (
                  <div class="w-1/6 border border-neutral flex items-center justify-center relative">
                    <PublicImage
                      src={image.path}
                      alt={`Image numéro ${index} du produit ${product.name}`}
                      classes="h-36"
                    />
                    <div class="absolute flex gap-4 bottom-0 right-0">
                      <button class="btn btn-primary btn-sm">
                        <i class="material-icons">arrow_back</i>
                      </button>
                      <button class="btn btn-primary btn-sm">
                        <i class="material-icons">arrow_forward</i>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </Tab>
          <Tab label="Détails">
            <h3 class="border border-primary p-4">Contenu du panel détails</h3>
          </Tab>
          <Tab label="Stocks">
            <h3 class="border border-primary p-4">Contenu du panel stocks</h3>
          </Tab>
          <Tab label="Livraison">
            <h3 class="border border-primary p-4">Contenu du panel livraison</h3>
          </Tab>
          <Tab label="Prix">
            <h3 class="border border-primary p-4">Contenu du panel prix</h3>
          </Tab>
          <Tab label="Référencement - SEO">
            <h3 class="border border-primary p-4">Contenu du panel référencement</h3>
          </Tab>
          <Tab label="Options">
            <h3 class="border border-primary p-4">Contenu du panel options</h3>
          </Tab>
        </TabList>
      </div>
      <div class="absolute bottom-0 w-full">
        <div class="flex justify-between p-4 border-t">
          <button class="btn btn-neutral">Aller au catalogue</button>
          <button class="btn btn-primary" disabled>
            Enregistrer et publier
          </button>
        </div>
      </div>
    </Admin>
  )
}
