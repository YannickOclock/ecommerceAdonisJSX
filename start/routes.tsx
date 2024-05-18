import router from '@adonisjs/core/services/router'

// partie front

const ShowCartController = () => import('#front/cart/controllers/show_cart_controller')
router.get('/cart', [ShowCartController, 'render']).as('front.cart')
router.get('/cart/add', [ShowCartController, 'add']).as('front.cart.add')

const ShowHomeController = () => import('#front/home/controllers/show_home_controller')
router.get('/', [ShowHomeController, 'render']).as('front.home')

//const Test = () => import('#viewsfront/pages/preact/test')
//router.get('/test', async ({ preact }: HttpContext) => preact.render(Test))

// partie back

const ShowDashboardController = () =>
  import('#admin/dashboard/controllers/show_dashboard_controller')
router.get('/admin', [ShowDashboardController, 'render']).as('admin.dashboard')
