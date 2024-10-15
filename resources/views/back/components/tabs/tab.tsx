interface TabProps {
  checked?: boolean
  label: string
  children: JSX.Element
}

export function Tab(props: TabProps) {
  const { checked = false, label, children } = props
  return (
    <>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        class="tab px-8 pb-10"
        aria-label={label}
        checked={checked}
      />
      <div role="tabpanel" class="tab-content pt-4">
        {children}
      </div>
    </>
  )
}
