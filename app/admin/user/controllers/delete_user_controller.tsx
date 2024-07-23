import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { UserRepository } from '#admin/user/repositories/user_repository'
import { UserDeleteModale } from '#viewsbackv2/pages/users/user_delete_modale'

@inject()
export default class DeleteUserController {
  constructor(private userRepository: UserRepository) {}

  async render({ request }: HttpContext) {
    const userId = request.param('id')
    const user = await this.userRepository.find(userId)
    return <UserDeleteModale user={user} />
  }

  async handle({ request, response, session }: HttpContext) {
    // TODO: voir pour gérer un soft delete sur les users et voir plus tard pour le texte avec la CNIL

    const userId: string = request.param('id')
    const user = await this.userRepository.find(userId)
    await user.delete()
    session.flash('notification', {
      type: 'success',
      message: `L'utilisateur a été supprimé avec succès`,
    })

    response.redirect().toRoute('admin.user.list')
  }
}
