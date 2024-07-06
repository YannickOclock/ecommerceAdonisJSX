import { Dashboard } from '#viewsbackv2/pages/dashboard/dashboard'
import { HttpContext } from '@adonisjs/core/http'

export default class ShowDashboardController {
  constructor() {}

  async render({}: HttpContext) {
    return <Dashboard />
  }
}
