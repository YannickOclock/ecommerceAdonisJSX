import { HttpContext } from '@adonisjs/core/http'
import { UserRepository } from '#admin/user/repositories/user_repository'
import { inject } from '@adonisjs/core'
import { UserEdit } from '#viewsback/pages/users/user_edit'
import { updateUserValidator } from '#admin/user/validators/update_user_validator'

@inject()
export default class EditUserController {
  constructor(private userRepository: UserRepository) {}

  async render({ request }: HttpContext) {
    const user = await this.userRepository.find(request.param('id'))
    return <UserEdit user={user} />
  }

  async update({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(updateUserValidator)
    await this.userRepository.update(payload)

    session.flash('notification', {
      type: 'success',
      message: "L'utilisateur a été édité avec succès",
    })
    response.redirect().toRoute('admin.user.list')
  }
}
