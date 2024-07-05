interface InputProps {
  id: string
  name: string
  type?: string
  defaultValue?: string
  placeholder?: string
}

export function Input(props: InputProps) {
  const { id, name, type = 'text', defaultValue, placeholder } = props
  return (
    <input
      name={name}
      type={type}
      id={id}
      class="input input-bordered w-4/6"
      value={defaultValue}
      placeholder={placeholder}
    />
  )
}
