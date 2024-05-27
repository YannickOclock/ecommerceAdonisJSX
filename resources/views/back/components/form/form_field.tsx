import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'
import { FormInput } from './form_input.tsx'
import { FormTextarea } from './form_textarea.tsx'
import { FormSelectCategory } from './select/select_category.tsx'

interface FormFieldProps {
  name: string
  label: string
  value?: string | null | undefined
  required?: boolean
  inputTagName?: string
  inputType?: string
  inputValues?: any
}

export function FormField(props: FormFieldProps) {
  const { name, label, value, required, inputTagName, inputType, inputValues } = props

  let fieldElement = null
  switch (inputTagName) {
    case 'select':
      fieldElement = <FormSelectCategory name={name} values={inputValues} required={required} />
      break
    case 'textarea':
      fieldElement = <FormTextarea name={name} value={value} required={required} />
      break
    case 'input':
    default:
      fieldElement = (
        <FormInput name={name} inputType={inputType} value={value} required={required} />
      )
      break
  }

  return (
    <div class="form-group">
      <label for={name} class={clsx(required ? 'required' : '')}>
        {label}
      </label>
      <div style="display: flex; flex-direction: column; width: 100%;">
        {fieldElement}
        {getFlashMessages().has(`inputErrorsBag.${name}`) &&
          getFlashMessages()
            .get(`inputErrorsBag.${name}`)
            .map((message: string) => {
              return <div class={'alert alert-danger'}>{message}</div>
            })}
      </div>
    </div>
  )
}
