interface TabListProps {
  children: JSX.Element | JSX.Element[]
}

export function TabList(props: TabListProps) {
  const { children } = props
  return (
    <div role="tablist" class="tabs tabs-bordered mt-8">
      {children}
    </div>
  )
}
