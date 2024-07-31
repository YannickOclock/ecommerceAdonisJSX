import clsx from 'clsx'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import { ErrorField } from '#viewsbackv2/components/form/error_field'
import { RequiredIndicator } from '#viewsbackv2/components/utils/required_indicator'

interface TextareaProps {
  id: string
  name: string
  required?: boolean
  rows?: number
  defaultValue?: string
  placeholder?: string
  withErrors?: boolean
}

export function Textarea(props: TextareaProps) {
  const {
    id,
    name,
    required = false,
    withErrors = true,
    rows = 5,
    defaultValue,
    placeholder,
  } = props

  let textareaElement = (
    <textarea
      rows={rows.toString()}
      id={id}
      name={name}
      required={required}
      class={clsx([
        'textarea textarea-bordered',
        required ? 'w-full' : 'w-4/6',
        withErrors && getFlashMessages().has(`inputErrorsBag.${name}`) && 'input-error',
      ])}
      placeholder={placeholder}
    >
      {defaultValue}
    </textarea>
  )
  textareaElement = required ? (
    <RequiredIndicator>{textareaElement}</RequiredIndicator>
  ) : (
    textareaElement
  )

  return (
    <>
      {textareaElement}
      {withErrors && <ErrorField name={name} />}
    </>
  )
}
