import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'

interface FormTextareaProps {
  name: string
  required?: boolean
  value?: string | null | undefined
}

export function FormTextarea(props: FormTextareaProps) {
  const { name, value, required } = props
  return (
    <textarea
      id={name}
      name={name}
      required={required}
      class={clsx(
        'form-control my-2',
        getFlashMessages().has(`inputErrorsBag.${name}`) && 'is-invalid'
      )}
    >
      {getFlashMessages().get(`${name}`) ?? value}
    </textarea>
  )
}
