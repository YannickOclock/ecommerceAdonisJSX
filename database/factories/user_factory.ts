import factory from '@adonisjs/lucid/factories'
import User from '#core/models/user'
import { UserRole } from '#app/admin/user/enums/user_role'

export const UserFactory = factory
  .define(User, ({ faker }) => {
    return {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      verified: faker.datatype.boolean(),
      role: faker.helpers.arrayElement([UserRole.Admin, UserRole.User]),
      darkMode: faker.datatype.boolean(),
      password: faker.internet.password(),
    }
  })
  .build()
