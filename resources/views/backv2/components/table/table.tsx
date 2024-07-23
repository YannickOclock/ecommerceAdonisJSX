interface TableProps {
  children: JSX.Element[]
}

export function Table(props: TableProps) {
  const { children } = props
  return (
    <div class="overflow-x-auto md:overflow-x-hidden pb-24">
      <table class="table">{children}</table>
    </div>
  )
}
