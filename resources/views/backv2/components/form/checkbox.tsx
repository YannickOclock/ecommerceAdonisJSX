import { ErrorField } from '#viewsbackv2/components/form/error_field'
import clsx from 'clsx'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import { RequiredIndicator } from '#viewsbackv2/components/utils/required_indicator'

interface CheckboxProps {
  id: string
  name: string
  required?: boolean
  disabled?: boolean
  defaultValue?: boolean
  withErrors?: boolean
}

export function Checkbox(props: Checkbox) {
  const { id, name, required = false, disabled = false, withErrors = true, defaultValue } = props

  let inputElement = (
    <input
      name={name}
      type="checkbox"
      id={id}
      required={required}
      disabled={disabled}
      class={clsx([
        'checkbox checkbox-primary',
        withErrors && getFlashMessages().has(`inputErrorsBag.${name}`) && 'input-error',
      ])}
      checked={getFlashMessages().get(`${name}`) || defaultValue}
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
