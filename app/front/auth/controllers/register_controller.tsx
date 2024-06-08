import { Register } from '#viewsfront/pages/auth/register'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  constructor() {}

  async render({}: HttpContext) {
    return <Register />
  }
}
