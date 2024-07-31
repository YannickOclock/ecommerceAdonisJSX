interface TableProps {
  children: JSX.Element[]
}

export function Table(props: TableProps) {
  const { children } = props
  return (
    <div class="overflow-x-auto md:overflow-x-hidden pb-24">
      <custom-table>
        <table class="table">{children}</table>
      </custom-table>
    </div>
  )
}
