import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'

interface FormSelectProps {
  name: string
  required?: boolean
  disabled?: boolean
  values: Array<string>
  defaultValue?: string
}

export function FormSelect(props: FormSelectProps) {
  const { name, required, disabled, values, defaultValue } = props
  console.log(`Valeur par défaut : ${defaultValue}`)
  return (
    <select
      id={name}
      name={name}
      required={required}
      disabled={disabled}
      class={clsx(
        'form-control my-2',
        getFlashMessages().has(`inputErrorsBag.${name}`) && 'is-invalid'
      )}
    >
      <option value="">Sélectionner une valeur ...</option>
      {Object.entries(values).map(([value, label]) => (
        <option
          value={value}
          selected={
            getFlashMessages().get(`${name}`) === value ||
            (defaultValue && defaultValue.toString() === value)
          }
        >
          {label}
        </option>
      ))}
    </select>
  )
}
