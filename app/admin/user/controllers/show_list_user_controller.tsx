import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { UserRepository } from '#admin/user/repositories/user_repository'
import { UserList } from '#viewsbackv2/pages/users/user_list'

@inject()
export default class ShowListUserController {
  constructor(private repository: UserRepository) {}

  async render({}: HttpContext) {
    const users = await this.repository.all()
    return <UserList users={users} />
  }
}
