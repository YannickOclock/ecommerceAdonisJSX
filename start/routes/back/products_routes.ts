import router from '@adonisjs/core/services/router'

// CONTROLLERS PRODUCTS
const ShowListProductController = () =>
  import('#admin/product/controllers/show_list_product_controller')
const ShowProductController = () => import('#admin/product/controllers/show_product_controller')
const AddProductController = () => import('#admin/product/controllers/add_product_controller')
const EditProductController = () => import('#admin/product/controllers/edit_product_controller')
const SwitchProductController = () => import('#admin/product/controllers/switch_product_controller')
const DeleteProductController = () => import('#admin/product/controllers/delete_product_controller')
const DeleteProductImageController = () =>
  import('#admin/product/controllers/delete_product_image_controller')
const OrderProductImageController = () =>
  import('#admin/product/controllers/order_product_image_controller')

// PARTIE PRODUCTS
export default function productsRoutes() {
  router
    .group(() => {
      router.get('/', [ShowListProductController, 'render']).as('list')
      router.get('/add', [AddProductController, 'render']).as('add')
      router.post('/add', [AddProductController, 'store']).as('store')
      router.get('/show/:id', [ShowProductController, 'render']).as('show')
      router.get('/edit/:id', [EditProductController, 'render']).as('edit')
      router.post('/edit/:id', [EditProductController, 'update']).as('update')
      router.get('/switch/:from/:id', [SwitchProductController, 'switch']).as('switch')
      router
        .post(':productId/images/:productImageId/update/order/:order', [
          OrderProductImageController,
          'handle',
        ])
        .as('image.order')
        .where('order', {
          match: /^[0-9]+$/,
        })
      router
        .get('/:productId/images/delete/:id', [DeleteProductImageController, 'delete'])
        .as('image.delete')
      router.get('/confirm/delete/:ids?', [DeleteProductController, 'render']).as('confirm.delete')
      router.post('/delete', [DeleteProductController, 'handle']).as('delete')
    })
    .prefix('products')
    .as('product')
}
