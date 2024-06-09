import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'

interface FormSelectProps {
  name: string
  required?: boolean
  values: Array<string>
  defaultValue?: string
}

export function FormSelect(props: FormSelectProps) {
  const { name, required, values, defaultValue } = props
  return (
    <select
      id={name}
      name={name}
      required={required}
      class={clsx(
        'form-control my-2',
        getFlashMessages().has(`inputErrorsBag.${name}`) && 'is-invalid'
      )}
    >
      <option value="">Sélectionner une catégorie ...</option>
      {Object.entries(values).map(([value, label]) => (
        <option
          value={value}
          selected={
            getFlashMessages().get(`${name}`) === value || (defaultValue && defaultValue === value)
          }
        >
          {label}
        </option>
      ))}
    </select>
  )
}
