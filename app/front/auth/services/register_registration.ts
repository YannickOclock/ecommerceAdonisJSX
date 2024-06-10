import { inject } from '@adonisjs/core'
import mail from '@adonisjs/mail/services/main'
import { RegisterConfirmationNotification } from '#front/auth/mails/register_confirmation_notification'

@inject()
export class RegisterRegistration {
  constructor() {}

  async execute(email: string) {
    //const subscription = await this.repository.storeSubscription(email)

    await mail.sendLater(
      new RegisterConfirmationNotification({
        email,
        subscriptionId: 'ABIDE123456',
      })
    )
  }
}
