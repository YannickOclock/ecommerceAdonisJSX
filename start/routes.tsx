import router from '@adonisjs/core/services/router'

// partie front

const ShowCartController = () => import('#front/cart/controllers/show_cart_controller')
const ShowStep1Controller = () => import('#front/product/controllers/show_step1_controller')
const ShowStep2Controller = () => import('#front/product/controllers/show_step2_controller')
const ShowHomeController = () => import('#front/home/controllers/show_home_controller')

router.get('/cart', [ShowCartController, 'render']).as('front.cart')

router.get('/step1/:id', [ShowStep1Controller, 'render']).as('front.step1')
router.post('/step1', [ShowStep1Controller, 'add']).as('front.step1.add')
router.get('/step2/:id', [ShowStep2Controller, 'render']).as('front.step2')

router.get('/', [ShowHomeController, 'render']).as('front.home')

// partie back

const ShowDashboardController = () =>
  import('#admin/dashboard/controllers/show_dashboard_controller')
router.get('/admin', [ShowDashboardController, 'render']).as('admin.dashboard')
