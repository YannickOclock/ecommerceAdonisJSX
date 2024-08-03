import User from '#core/models/user'
import { ResultOf } from '#types/common'

interface UserCreateDto {
  firstname: string
  lastname: string
  email: string
  plainPassword: string
  role: number
  verified?: boolean | undefined
}

interface UserUpdateDto {
  id: string
  firstname: string
  lastname: string
  email: string
  plainPassword?: string | undefined
  role: number
  verified?: boolean | undefined
}

export type AdminUserListQueryResult = ResultOf<UserRepository, 'all'>
export type AdminUserEditQueryResult = ResultOf<UserRepository, 'find'>
export type AdminUserByIdsQueryResult = ResultOf<UserRepository, 'findByIds'>

export class UserRepository {
  async all(): Promise<User[]> {
    return User.query().orderBy('lastname', 'asc').orderBy('firstname', 'asc').limit(5)
  }

  async find(id: string): Promise<User> {
    return await User.query().where('id', '=', id).firstOrFail()
  }

  async findByIds(ids: string[]): Promise<User[]> {
    return User.query().whereIn('id', ids)
  }

  wideProductFromPayload(payload: UserCreateDto | UserUpdateDto, user: User) {
    user.firstname = payload.firstname
    user.lastname = payload.lastname
    user.email = payload.email
    if (payload.plainPassword) {
      user.password = payload.plainPassword
    }
    user.role = payload.role
    user.verified = false
    if (payload.verified) user.verified = true
  }

  async create(payload: UserCreateDto): Promise<string> {
    const user = new User()
    this.wideProductFromPayload(payload, user)
    await user.save()
    return user.id
  }

  async update(payload: UserUpdateDto) {
    const user = await this.find(payload.id)
    this.wideProductFromPayload(payload, user)
    await user.save()
  }

  async switch(userId: string): Promise<boolean> {
    const user = await this.find(userId)
    user.verified = !user.verified
    await user.save()
    return user.verified
  }

  async switchTheme(userId: string): Promise<void> {
    const user = await this.find(userId)
    user.darkMode = !user.darkMode
    await user.save()
  }
}
