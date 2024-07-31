import { getFlashMessages } from '#resources/helpers/flash_messages'
import { SuccessMessage } from '#viewsback/components/messages/success_message'

export function MessagesManager() {
  const messageElements = []

  if (getFlashMessages().has('notification')) {
    const notification = getFlashMessages().get('notification')
    if (notification.type === 'success') {
      messageElements.push(<SuccessMessage message={notification.message} />)
    }
  }

  return (
    <div class={'p-4'} up-flashes>
      {messageElements.map((messageElement) => messageElement)}
    </div>
  )
}
