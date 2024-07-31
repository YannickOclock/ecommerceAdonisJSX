interface IndicatorProps {
  children: JSX.Element | JSX.Element[]
}

export function RequiredIndicator(props: IndicatorProps) {
  const { children } = props
  return (
    <div class="indicator w-4/6">
      <span class="indicator-item badge badge-primary">requis</span>
      {children}
    </div>
  )
}
