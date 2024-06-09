import User from '#core/models/user'
import { ResultOf } from '#types/common'

export type AdminUserListQueryResult = ResultOf<UserRepository, 'all'>

export class UserRepository {
  async all(): Promise<User[]> {
    return User.query().orderBy('lastname', 'asc').orderBy('firstname', 'asc').limit(5)
  }
}
