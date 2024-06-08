import { HttpContext } from '@adonisjs/core/http'

export default class LogoutController {
  constructor() {}

  async handle({ auth, session, response }: HttpContext) {
    await auth.use('web').logout()
    session.flash('success', 'Déconnexion Ok !!')
    return response.redirect().toRoute('front.login')
  }
}
