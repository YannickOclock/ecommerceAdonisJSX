import clsx from 'clsx'

interface IndicatorProps {
  children: JSX.Element | JSX.Element[]
  classes?: string
}

export function RequiredIndicator(props: IndicatorProps) {
  const { children, classes = 'w-4/6' } = props
  return (
    <div class={clsx('indicator', classes)}>
      <span class="indicator-item badge badge-primary">requis</span>
      {children}
    </div>
  )
}
