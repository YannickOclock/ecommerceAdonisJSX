import { inject } from '@adonisjs/core'
import { RegisterRegistration } from '#front/auth/services/register_registration'

@inject()
export default class RegisterEmailController {
  constructor(private service: RegisterRegistration) {}

  async execute() {
    const email = 'exemple@example.com'
    await this.service.execute(email)
  }
}
