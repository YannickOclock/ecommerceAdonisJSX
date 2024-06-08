import User from '#app/core/models/user'
import Product from '#core/models/product'
import { ResultOf } from '#types/common'

interface AuthRegisterDTO {
  firstname: string
  lastname: string
  email: string
  plainPassword: string
}

export class UserRepository {
  wideProductFromPayload(payload: AuthRegisterDTO, user: User) {
    user.firstname = payload.firstname
    user.lastname = payload.lastname
    user.email = payload.email
    user.password = payload.plainPassword
  }

  async create(payload: AuthRegisterDTO): Promise<string> {
    const user = new User()
    this.wideProductFromPayload(payload, user)
    await user.save()
    return user.id
  }
}
