import { ErrorField } from '#viewsbackv2/components/form/error_field'
import clsx from 'clsx'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import { RequiredIndicator } from '#viewsbackv2/components/utils/required_indicator'

interface InputProps {
  id: string
  name: string
  required?: boolean
  type?: string
  defaultValue?: string
  placeholder?: string
  withErrors?: boolean
}

export function Input(props: InputProps) {
  const {
    id,
    name,
    required = false,
    withErrors = true,
    type = 'text',
    defaultValue,
    placeholder,
  } = props

  let inputElement = (
    <input
      name={name}
      type={type}
      id={id}
      required={required}
      class={clsx([
        'input input-bordered',
        required ? 'w-full' : 'w-4/6',
        withErrors && getFlashMessages().has(`inputErrorsBag.${name}`) && 'input-error',
      ])}
      value={getFlashMessages().get(`${name}`) || defaultValue}
      placeholder={placeholder}
    />
  )
  inputElement = required ? <RequiredIndicator>{inputElement}</RequiredIndicator> : inputElement

  return (
    <>
      {inputElement}
      {withErrors && <ErrorField name={name} />}
    </>
  )
}
