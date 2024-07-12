import { HttpContext } from '@adonisjs/core/http'
import { UserAdd } from '#viewsbackv2/pages/users/user_add'
import { createUserValidator } from '#admin/user/validators/create_user_validator'
import { UserRepository } from '#admin/user/repositories/user_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class AddUserController {
  constructor(private userRepository: UserRepository) {}

  async render({}: HttpContext) {
    return <UserAdd />
  }

  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    await this.userRepository.create(payload)

    session.flash('notification', {
      type: 'success',
      message: "L'utilisateur a été ajouté avec succès",
    })
    response.redirect().toRoute('admin.user.list')
  }
}
