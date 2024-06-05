import router from '@adonisjs/core/services/router'

// partie front

const ShowCartController = () => import('#front/cart/controllers/show_cart_controller')
const ShowStep1Controller = () => import('#front/product/controllers/show_step1_controller')
const ShowStep2Controller = () => import('#front/product/controllers/show_step2_controller')
const ShowHomeController = () => import('#front/home/controllers/show_home_controller')

router.get('/cart', [ShowCartController, 'render']).as('front.cart')

router.get('/step1/:id/:productImageId?', [ShowStep1Controller, 'render']).as('front.step1')
router.post('/step1', [ShowStep1Controller, 'add']).as('front.step1.add')
router.get('/step2/:id', [ShowStep2Controller, 'render']).as('front.step2')

router.get('/', [ShowHomeController, 'render']).as('front.home')

// partie back

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

// CONTROLLERS MAIN

router.get('/admin', [ShowDashboardController, 'render']).as('admin.dashboard')

// PARTIE PRODUCTS

router.get('/admin/products', [ShowListProductController, 'render']).as('admin.product.list')
router.get('/admin/products/add', [AddProductController, 'render']).as('admin.product.add')
router.post('/admin/products/add', [AddProductController, 'store']).as('admin.product.store')
router.get('/admin/products/edit/:id', [EditProductController, 'render']).as('admin.product.edit')
router
  .post('/admin/products/edit/:id', [EditProductController, 'update'])
  .as('admin.product.update')
router
  .get('/admin/products/switch/:id', [SwitchProductController, 'switch'])
  .as('admin.product.switch')
router
  .get('/admin/products/:productId/images/delete/:id', [DeleteProductImageController, 'delete'])
  .as('admin.product.image.delete')

// PARTIE CATEGORIES

router
  .get('/admin/categories/:parentId?', [ShowListCategoryController, 'render'])
  .as('admin.category.list')
router.get('/admin/categories/add', [AddCategoryController, 'render']).as('admin.category.add')
router.post('/admin/categories/add', [AddCategoryController, 'store']).as('admin.category.store')
router
  .get('/admin/categories/edit/:id', [EditCategoryController, 'render'])
  .as('admin.category.edit')
router
  .post('/admin/categories/edit/:id', [EditCategoryController, 'update'])
  .as('admin.category.update')
router
  .get('/admin/categories/switch/:id', [SwitchCategoryController, 'switch'])
  .as('admin.category.switch')
