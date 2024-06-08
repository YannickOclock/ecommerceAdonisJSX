import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'

interface FormInputProps {
  name: string
  value?: string | null | undefined
  required?: boolean
  autofocus?: boolean
  inputType?: string
}

export function FormInput(props: FormInputProps) {
  const { name, value, required, autofocus, inputType } = props

  return (
    <input
      type={inputType || 'text'}
      id={name}
      name={name}
      value={getFlashMessages().get(`${name}`) || value}
      class={clsx(
        'form-control my-2',
        getFlashMessages().has(`inputErrorsBag.${name}`) && 'is-invalid'
      )}
      required={required}
      autofocus={`${autofocus}`}
    />
  )
}
