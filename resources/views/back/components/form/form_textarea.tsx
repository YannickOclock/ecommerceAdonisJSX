import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'

interface FormTextareaProps {
  name: string
  required?: boolean
  disabled?: boolean
  value?: string | null | undefined
}

export function FormTextarea(props: FormTextareaProps) {
  const { name, value, required, disabled } = props
  return (
    <textarea
      id={name}
      name={name}
      required={required}
      readonly={disabled}
      class={clsx(
        'form-control my-2',
        getFlashMessages().has(`inputErrorsBag.${name}`) && 'is-invalid'
      )}
    >
      {getFlashMessages().get(`${name}`) ?? value}
    </textarea>
  )
}
