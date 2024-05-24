import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'

interface FormInputProps {
  name: string
  value?: string | null | undefined
  required?: boolean
  inputType?: string
}

export function FormInput(props: FormInputProps) {
  const { name, value, required, inputType } = props

  if (inputType === 'checkbox') {
    let checked: boolean = true
    console.log(value)
    if (getFlashMessages().get(`${name}`) === 'on' || value === 'on' || value === '1') {
      checked = true
    } else {
      checked = false
    }
    return (
      <input
        type={inputType || 'text'}
        id={name}
        name={name}
        checked={checked}
        class={clsx(
          'form-control my-2',
          getFlashMessages().has(`inputErrorsBag.${name}`) && 'is-invalid'
        )}
        required={required}
      />
    )
  } else {
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
      />
    )
  }
}
