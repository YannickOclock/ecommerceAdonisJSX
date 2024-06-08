import router from '@adonisjs/core/services/router'

// ---------------------
// PARTIE FRONT
// ---------------------

const ShowCartController = () => import('#front/cart/controllers/show_cart_controller')
const ShowStep1Controller = () => import('#front/product/controllers/show_step1_controller')
const ShowStep2Controller = () => import('#front/product/controllers/show_step2_controller')
const ShowHomeController = () => import('#front/home/controllers/show_home_controller')

router
  .group(() => {
    router.get('/cart', [ShowCartController, 'render']).as('cart')
    router.get('/step1/:id/:productImageId?', [ShowStep1Controller, 'render']).as('step1')
    router.post('/step1', [ShowStep1Controller, 'add']).as('step1.add')
    router.get('/step2/:id', [ShowStep2Controller, 'render']).as('step2')
    router.get('/', [ShowHomeController, 'render']).as('home')
  })
  .as('front')

// -------------------
// PARTIE BACK
// -------------------

// CONTROLLERS PRODUCTS
const ShowDashboardController = () =>
  import('#admin/dashboard/controllers/show_dashboard_controller')
const ShowListProductController = () =>
  import('#admin/product/controllers/show_list_product_controller')
const AddProductController = () => import('#admin/product/controllers/add_product_controller')
const EditProductController = () => import('#admin/product/controllers/edit_product_controller')
const SwitchProductController = () => import('#admin/product/controllers/switch_product_controller')
const DeleteProductImageController = () =>
  import('#admin/product/controllers/delete_product_image_controller')

// CONTROLLERS CATEGORIES
const ShowListCategoryController = () =>
  import('#admin/category/controllers/show_list_category_controller')
const AddCategoryController = () => import('#admin/category/controllers/add_category_controller')
const EditCategoryController = () => import('#admin/category/controllers/edit_category_controller')
const SwitchCategoryController = () =>
  import('#admin/category/controllers/switch_category_controller')

router
  .group(() => {
    // CONTROLLERS MAIN
    router.get('/', [ShowDashboardController, 'render']).as('dashboard')

    // PARTIE PRODUCTS
    router.get('/products', [ShowListProductController, 'render']).as('product.list')
    router.get('/products/add', [AddProductController, 'render']).as('product.add')
    router.post('/products/add', [AddProductController, 'store']).as('product.store')
    router.get('/products/edit/:id', [EditProductController, 'render']).as('product.edit')
    router.post('/products/edit/:id', [EditProductController, 'update']).as('product.update')
    router.get('/products/switch/:id', [SwitchProductController, 'switch']).as('product.switch')
    router
      .get('/products/:productId/images/delete/:id', [DeleteProductImageController, 'delete'])
      .as('product.image.delete')

    // PARTIE CATEGORIES
    router
      .get('/categories/list/:parentId?', [ShowListCategoryController, 'render'])
      .as('category.list')
    router.get('/categories/add', [AddCategoryController, 'render']).as('category.add')
    router.post('/categories/add', [AddCategoryController, 'store']).as('category.store')
    router.get('/categories/edit/:id', [EditCategoryController, 'render']).as('category.edit')
    router.post('/categories/edit/:id', [EditCategoryController, 'update']).as('category.update')
    router.get('/categories/switch/:id', [SwitchCategoryController, 'switch']).as('category.switch')
  })
  .prefix('admin')
  .as('admin')
