import { Login } from '#viewsfront/pages/auth/login'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  constructor() {}

  async render({}: HttpContext) {
    return <Login />
  }
}
