import User from '#core/models/user'
import { ResultOf } from '#types/common'

interface UserCreateDto {
  firstname: string
  lastname: string
  email: string
  plainPassword: string
  role: number
}

export type AdminUserListQueryResult = ResultOf<UserRepository, 'all'>

export class UserRepository {
  async all(): Promise<User[]> {
    return User.query().orderBy('lastname', 'asc').orderBy('firstname', 'asc').limit(5)
  }

  wideProductFromPayload(payload: UserCreateDto, user: User) {
    user.firstname = payload.firstname
    user.lastname = payload.lastname
    user.email = payload.email
    user.password = payload.plainPassword
    user.role = payload.role
  }

  async create(payload: UserCreateDto): Promise<string> {
    const user = new User()
    this.wideProductFromPayload(payload, user)
    await user.save()
    return user.id
  }
}
