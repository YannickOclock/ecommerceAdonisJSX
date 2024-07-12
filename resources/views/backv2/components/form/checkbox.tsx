import { ErrorField } from '#viewsbackv2/components/form/error_field'
import clsx from 'clsx'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import { RequiredIndicator } from '#viewsbackv2/components/utils/required_indicator'

interface CheckboxProps {
  id: string
  name: string
  required?: boolean
  disabled?: boolean
  toggle?: boolean
  defaultValue?: boolean | undefined
  withErrors?: boolean
}

export function Checkbox(props: Checkbox) {
  const {
    id,
    name,
    required = false,
    disabled = false,
    toggle = false,
    withErrors = true,
    defaultValue = undefined,
  } = props

  let inputElement = (
    <input
      name={name}
      type="checkbox"
      id={id}
      required={required}
      disabled={disabled}
      class={clsx([
        !toggle && 'checkbox checkbox-primary',
        toggle && 'toggle toggle-primary',
        withErrors && getFlashMessages().has(`inputErrorsBag.${name}`) && 'input-error',
      ])}
      checked={defaultValue || getFlashMessages().get(`${name}`)}
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
