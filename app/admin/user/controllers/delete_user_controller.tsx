import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { UserRepository } from '#admin/user/repositories/user_repository'
import { UserDeleteModale } from '#viewsback/pages/users/user_delete_modale'
import { deleteUserValidator } from '#admin/user/validators/delete_user_validator'

@inject()
export default class DeleteUserController {
  constructor(private userRepository: UserRepository) {}

  async render({ request }: HttpContext) {
    const userIds = request.param('ids').split(',')
    const users = await this.userRepository.findByIds(userIds)
    return <UserDeleteModale users={users} />
  }

  async handle({ request, response, session }: HttpContext) {
    // TODO: voir pour gérer un soft delete sur les users et voir plus tard pour le texte avec la CNIL
    const payload = await request.validateUsing(deleteUserValidator)
    const users = await this.userRepository.findByIds(payload.ids)
    for (const user of users) {
      await user.delete()
    }
    session.flash('notification', {
      type: 'success',
      message:
        users.length > 1
          ? `Les utilisateurs ont été supprimés avec succès`
          : `L'utilisateur a été supprimé avec succès`,
    })

    response.redirect().toRoute('admin.user.list')
  }
}
