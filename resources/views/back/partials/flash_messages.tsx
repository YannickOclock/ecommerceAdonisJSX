import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'

export function FlashMessages() {
  if (getFlashMessages().has('notification')) {
    {
      const notification = getFlashMessages().get('notification')
      return (
        <div class={clsx(`alert alert-${notification.type} alert-dismissible`)} role="alert">
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
            <i class="material-icons">close</i>
          </button>
          <div class="alert-message">{notification.message}</div>
        </div>
      )
    }
  } else {
    return <></>
  }
}
