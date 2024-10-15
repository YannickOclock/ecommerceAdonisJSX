import { ErrorField } from '#viewsback/components/form/error_field'
import clsx from 'clsx'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import { RequiredIndicator } from '#viewsback/components/utils/required_indicator'

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
  classes?: string
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
    classes,
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
  inputElement = required ? (
    <RequiredIndicator classes={classes}>{inputElement}</RequiredIndicator>
  ) : (
    inputElement
  )

  return (
    <>
      {inputElement}
      {withErrors && <ErrorField name={name} />}
    </>
  )
}
