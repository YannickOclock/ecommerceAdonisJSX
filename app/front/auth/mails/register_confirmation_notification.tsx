import mjml from 'mjml'
import { BaseMail } from '@adonisjs/mail'
import { RegisterConfirmation } from '#viewsfront/emails/register/register_confirmation'

interface RegisterConfirmationNotificationParams {
  email: string
  subscriptionId: string
}

export class RegisterConfirmationNotification extends BaseMail {
  subject = '[URL BOUTIQUE] Confirmez votre inscription au site e-commerce'

  constructor(private params: RegisterConfirmationNotificationParams) {
    super()
  }

  prepare() {
    //const url = router.makeSignedUrl('newsletters.confirm', { id: this.params.subscriptionId })
    const url = `https://localhost:3333/register/confirmation`

    // @ts-expect-error - TODO: Change `mjml` to support JSX
    const html = mjml(<RegisterConfirmation confirmationLink={url} />)

    this.message.to(this.params.email).html(html.html)
  }
}
