interface FormGroupProps {
  children: JSX.Element[]
}

export function FormGroup(props: FormGroupProps) {
  const { children } = props
  return <div class="flex mb-4 items-center gap-4">{children}</div>
}
