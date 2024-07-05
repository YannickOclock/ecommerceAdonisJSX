interface TextareaProps {
  id: string
  name: string
  rows?: number
  defaultValue?: string
  placeholder?: string
}

export function Textarea(props: TextareaProps) {
  const { id, name, rows = 5, defaultValue, placeholder } = props
  return (
    <textarea
      rows={rows.toString()}
      id={id}
      name={name}
      class="textarea textarea-bordered w-4/6"
      placeholder={placeholder}
    >
      {defaultValue}
    </textarea>
  )
}
