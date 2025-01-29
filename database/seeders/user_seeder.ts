import { UserRole } from '#app/admin/user/enums/user_role'
import { UserFactory } from '#database/factories/user_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await UserFactory.merge({
      email: 'admin@demo.fr',
      password: 'secret',
      role: UserRole.Admin,
    }).create() // Utilisateur admin
  }
}
