import { Register } from '#viewsfront/pages/auth/register'
import { HttpContext } from '@adonisjs/core/http'
import { authRegisterValidator } from '#front/auth/validators/auth_register_validator'
import { UserRepository } from '#front/auth/repositories/user_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class AuthController {
  constructor(private userRepository: UserRepository) {}

  async render({}: HttpContext) {
    return <Register />
  }

  async handle({ request, session, response }: HttpContext) {
    const payload = await request.validateUsing(authRegisterValidator)
    await this.userRepository.create(payload)
    session.flash('success', 'Inscription Ok !!!')
    return response.redirect().toRoute('front.login')
  }
}
