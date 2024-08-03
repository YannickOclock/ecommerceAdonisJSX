import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {}

const fields = {
  ids: 'id des utilisateurs',
}

const deleteUserValidator = vine.compile(
  vine.object({
    ids: vine.array(vine.string()),
  })
)
deleteUserValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { deleteUserValidator }
