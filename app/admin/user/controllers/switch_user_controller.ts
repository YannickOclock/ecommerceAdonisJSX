import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { UserRepository } from '#admin/user/repositories/user_repository'

@inject()
export default class SwitchUserController {
  constructor(private userRepository: UserRepository) {}

  async switch({ request, response, session }: HttpContext) {
    const productId = request.param('id')
    const verified = await this.userRepository.switch(productId)
    session.flash('notification', {
      type: 'success',
      message: `L'utilisateur a été ${verified ? 'activé' : 'désactivé'} avec succès`,
    })
    response.redirect().toRoute('admin.user.list')
  }
}
