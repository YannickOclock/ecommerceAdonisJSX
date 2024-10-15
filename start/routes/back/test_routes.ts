import router from '@adonisjs/core/services/router'

// CONTROLLERS TEST
const TestPageController = () => import('#admin/test/controllers/test_page_controller')

// PARTIE TEST
export default function testRoutes() {
  router.get('/test', [TestPageController, 'render']).as('test')
}
