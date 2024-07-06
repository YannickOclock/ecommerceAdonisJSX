import clsx from 'clsx'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import { ErrorField } from '#viewsbackv2/components/form/error_field'
import { RequiredIndicator } from '#viewsbackv2/components/utils/required_indicator'

interface SelectProps {
  id: string
  name: string
  required?: boolean
  placeholder: string
  options: { value: string; label: string }[]
  defaultValue?: string
  withErrors?: boolean
}

export function Select(props: SelectProps) {
  const {
    id,
    name,
    required = false,
    withErrors = true,
    defaultValue,
    options,
    placeholder,
  } = props

  let selectElement = (
    <select
      id={id}
      name={name}
      required={required}
      class={clsx([
        'select select-bordered',
        required ? 'w-full' : 'w-4/6',
        withErrors && getFlashMessages().has(`inputErrorsBag.${name}`) && 'input-error',
      ])}
    >
      <option disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option
          value={option.value}
          selected={option.value === (getFlashMessages().get(`${name}`) || defaultValue)}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
  selectElement = required ? <RequiredIndicator>{selectElement}</RequiredIndicator> : selectElement

  return (
    <>
      {selectElement}
      {withErrors && <ErrorField name={name} />}
    </>
  )
}
