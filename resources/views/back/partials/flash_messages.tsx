import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'
import { HttpContext } from '@adonisjs/core/http'

export async function FlashMessages() {
  const { auth } = HttpContext.getOrFail()
  await auth.check()

  const authVerifiedMessage = !auth.user.verified && (
    <div class={clsx(`alert alert-warning alert-dismissible`)} role="alert">
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <i class="material-icons">close</i>
      </button>
      <div class="alert-message">
        <strong>Votre compte n'est pas activé</strong>,{' '}
        <a href="#">renvoyer le lien d'activation</a>
      </div>
    </div>
  )

  if (getFlashMessages().has('notification')) {
    {
      const notification = getFlashMessages().get('notification')
      return (
        <>
          {authVerifiedMessage && authVerifiedMessage}
          <div class={clsx(`alert alert-${notification.type} alert-dismissible`)} role="alert">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <i class="material-icons">close</i>
            </button>
            <div class="alert-message">{notification.message}</div>
          </div>
        </>
      )
    }
  } else {
    return <>{authVerifiedMessage && authVerifiedMessage}</>
  }
}
