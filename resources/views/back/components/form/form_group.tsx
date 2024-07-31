interface FormGroupProps {
  children: JSX.Element[]
}

export function FormGroup(props: FormGroupProps) {
  const { children } = props
  return <div class="flex mb-8 items-center flex-wrap gap-x-4">{children}</div>
}
