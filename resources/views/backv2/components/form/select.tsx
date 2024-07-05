interface SelectProps {
  id: string
  name: string
  placeholder: string
  options: { value: string; label: string }[]
  defaultValue?: string
}

export function Select(props: SelectProps) {
  const { id, name, defaultValue, options, placeholder } = props
  return (
    <select id={id} name={name} class="select select-bordered w-4/6">
      <option disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option.value} selected={option.value === defaultValue}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
