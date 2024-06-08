import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'
import { FormInput } from './form_input.tsx'

interface FormFieldProps {
  name: string
  label: string
  value?: string | null | undefined
  classes?: string | undefined
  required?: boolean
  autofocus?: boolean
  inputTagName?: string
  inputType?: string
}

export function FormField(props: FormFieldProps) {
  const { name, label, value, required, autofocus, inputTagName, inputType } = props

  let fieldElement = null
  switch (inputTagName) {
    case 'input':
    default:
      fieldElement = (
        <FormInput
          name={name}
          inputType={inputType}
          value={value}
          required={required}
          autofocus={autofocus}
        />
      )
      break
  }

  return (
    <div class="flex">
      <label for={name} class={clsx(required ? 'required' : '')}>
        {label}
      </label>
      <div class="input-group">
        {fieldElement}
        {getFlashMessages().has(`inputErrorsBag.${name}`) &&
          getFlashMessages()
            .get(`inputErrorsBag.${name}`)
            .map((message: string) => {
              return <div class={'alert alert-danger'}>{message}</div>
            })}
      </div>
      {required === undefined && <div class="optional_field_flag">Optionnel</div>}
    </div>
  )
}
