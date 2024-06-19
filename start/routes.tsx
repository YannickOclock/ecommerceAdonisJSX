import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.ts'

// ---------------------
// PARTIE FRONT
// ---------------------

const ShowCartController = () => import('#front/cart/controllers/show_cart_controller')
const ShowStep1Controller = () => import('#front/product/controllers/show_step1_controller')
const ShowStep2Controller = () => import('#front/product/controllers/show_step2_controller')
const ShowHomeController = () => import('#front/home/controllers/show_home_controller')
const AuthController = () => import('#front/auth/controllers/auth_controller')
const RegisterController = () => import('#front/auth/controllers/register_controller')
const LogoutController = () => import('#front/auth/controllers/logout_controller')
const RegisterEmailController = () => import('#front/auth/controllers/register_email_controller')

router
  .group(() => {
    router
      .get('/register/send/email', [RegisterEmailController, 'execute'])
      .as('register.send.mail')

    router.get('/login', [AuthController, 'render']).as('login')
    router.post('/login', [AuthController, 'handle']).as('login.post')
    router.get('/register', [RegisterController, 'render']).as('register')
    router.post('/register', [RegisterController, 'handle']).as('register.post')
    router.get('/logout', [LogoutController, 'handle']).as('logout')
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

// CONTROLLERS USERS
const ShowListUserController = () => import('#admin/user/controllers/show_list_user_controller')
const AddUserController = () => import('#admin/user/controllers/add_user_controller')
const EditUserController = () => import('#admin/user/controllers/edit_user_controller')
const SwitchUserController = () => import('#admin/user/controllers/switch_user_controller')

// CONTROLLERS ADDRESSES
const ShowListAddressController = () =>
  import('#admin/address/controllers/show_list_address_controller')
const AddAddressController = () => import('#admin/address/controllers/add_address_controller')

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

    // PARTIE USERS
    router.get('/users', [ShowListUserController, 'render']).as('user.list')
    router.get('/users/add', [AddUserController, 'render']).as('user.add')
    router.post('/users/add', [AddUserController, 'store']).as('user.store')
    router.get('/users/edit/:id', [EditUserController, 'render']).as('user.edit')
    router.post('/users/edit/:id', [EditUserController, 'update']).as('user.update')
    router.get('/users/switch/:id', [SwitchUserController, 'switch']).as('user.switch')

    // PARTIE ADRESSES
    router.get('/addresses', [ShowListAddressController, 'render']).as('address.list')
    router.get('/addresses/add', [AddAddressController, 'render']).as('address.add')
    router.post('/addresses/add', [AddAddressController, 'store']).as('address.store')
  })
  .prefix('admin')
  .as('admin')
  .use([middleware.auth(), middleware.admin()])
