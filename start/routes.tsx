import router from '@adonisjs/core/services/router'
const MainController = () => import('#blog/controllers/main_controller')

router.get('/example/posts', [MainController, 'index']).as('example.home')
router.get('/example/posts/ajout', [MainController, 'about']).as('example.posts.add')
router.post('/example/posts/ajout', [MainController, 'aboutPost']).as('example.posts.add.post')
