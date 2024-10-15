import router from '@adonisjs/core/services/router'

const ShowCartController = () => import('#front/cart/controllers/show_cart_controller')
const ShowCartCounterController = () =>
  import('#front/cart/controllers/show_cart_counter_controller')
const UpdateQuantityCartController = () =>
  import('#front/cart/controllers/update_quantity_cart_controller')
const DeleteProductFromCartController = () =>
  import('#front/cart/controllers/delete_product_from_cart_controller')
const ShowStep1Controller = () => import('#front/product/controllers/show_step1_controller')
const ShowStep2Controller = () => import('#front/product/controllers/show_step2_controller')
const ShowHomeController = () => import('#front/home/controllers/show_home_controller')
const AuthController = () => import('#front/auth/controllers/auth_controller')
const RegisterController = () => import('#front/auth/controllers/register_controller')
const LogoutController = () => import('#front/auth/controllers/logout_controller')
const RegisterEmailController = () => import('#front/auth/controllers/register_email_controller')
const ShowCategoryProductsController = () =>
  import('#front/category/controllers/show_category_products_controller')

export default function frontRoutes() {
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
      router
        .post('/cart/update/quantity', [UpdateQuantityCartController, 'handle'])
        .as('cart.update.quantity')
      router
        .get('/cart/delete/:productId', [DeleteProductFromCartController, 'render'])
        .where('productId', router.matchers.uuid())
        .as('cart.product.delete')
      router
        .post('/cart/delete', [DeleteProductFromCartController, 'handle'])
        .as('cart.product.delete.post')
      router
        .get('/category/:slug', [ShowCategoryProductsController, 'render'])
        .where('slug', router.matchers.slug())
        .as('category.show')

      router.get('/cart/counter', [ShowCartCounterController, 'render']).as('cart.counter')
      router.get('/step1/:id/:productImageId?', [ShowStep1Controller, 'render']).as('step1')
      router.post('/step1', [ShowStep1Controller, 'add']).as('step1.add')
      router.get('/step2/:id', [ShowStep2Controller, 'render']).as('step2')
      router.get('/', [ShowHomeController, 'render']).as('home')
    })
    .as('front')
}
