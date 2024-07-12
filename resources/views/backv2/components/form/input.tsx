import { ErrorField } from '#viewsbackv2/components/form/error_field'
import clsx from 'clsx'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import { RequiredIndicator } from '#viewsbackv2/components/utils/required_indicator'

interface InputProps {
  id: string
  name: string
  required?: boolean
  disabled?: boolean
  type?: string
  multiple?: boolean
  defaultValue?: string
  placeholder?: string
  withErrors?: boolean
}

export function Input(props: InputProps) {
  const {
    id,
    name,
    required = false,
    disabled = false,
    withErrors = true,
    type = 'text',
    multiple = false,
    defaultValue,
    placeholder,
  } = props

  let inputElement = (
    <input
      name={name}
      type={type}
      multiple={type === 'file' && multiple}
      id={id}
      required={required}
      readonly={disabled}
      class={clsx([
        'input input-bordered',
        type === 'file' && 'file-input pl-0',
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
