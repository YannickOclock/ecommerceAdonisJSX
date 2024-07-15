import { UserRepository } from '#admin/user/repositories/user_repository'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

@inject()
export default class SwitchDarkModeController {
  constructor(private userRepository: UserRepository) {}

  async handle({ auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    await this.userRepository.switchTheme(user.id)

    response.redirect().toRoute('admin.dashboard')
  }
}
