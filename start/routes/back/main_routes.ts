import router from '@adonisjs/core/services/router'

// CONTROLLERS MAIN
const ShowDashboardController = () =>
  import('#admin/dashboard/controllers/show_dashboard_controller')

// PARTIE MAIN
export default function mainRoutes() {
  router.get('/', [ShowDashboardController, 'render']).as('dashboard')
}
