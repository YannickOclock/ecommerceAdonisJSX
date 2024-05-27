import { AdminCategoryListQueryResult } from '#admin/category/repositories/category_repository'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import clsx from 'clsx'

interface FormTextareaProps {
  name: string
  required?: boolean
  values: AdminCategoryListQueryResult
}

export function FormSelectCategory(props: FormTextareaProps) {
  const { name, required, values } = props
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
      {values.map((value) => (
        <option value={value.id}>{value.name}</option>
      ))}
    </select>
  )
}
