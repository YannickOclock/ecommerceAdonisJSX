import { Login } from '#viewsfront/pages/auth/login'
import { HttpContext } from '@adonisjs/core/http'
import { authLoginValidator } from '#front/auth/validators/auth_login_validator'
import User from '#app/core/models/user'

export default class AuthController {
  constructor() {}

  async render({}: HttpContext) {
    return <Login />
  }

  async handle({ request, auth, session, response }: HttpContext) {
    const { email, password } = await request.validateUsing(authLoginValidator)
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    session.flash('success', 'Connexion Ok !!')
    return response.redirect().toRoute('front.home')
  }
}
