import router from '@adonisjs/core/services/router'
const MainController = () => import('#blog/controllers/main_controller')

router.get('/example/posts', [MainController, 'index']).as('example.home')
router.get('/example/posts/ajout', [MainController, 'about']).as('example.posts.add')
router.post('/example/posts/ajout', [MainController, 'aboutPost']).as('example.posts.add.post')

// partie front

const ShowHomeController = () => import('#front/home/controllers/show_home_controller')
router.get('/', [ShowHomeController, 'render']).as('front.home')

// partie back

const ShowDashboardController = () =>
  import('#admin/dashboard/controllers/show_dashboard_controller')
router.get('/admin', [ShowDashboardController, 'render']).as('admin.dashboard')
