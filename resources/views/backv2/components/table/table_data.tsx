interface TableDataProps {
  children: JSX.Element | JSX.Element[]
}

export function TableData(props: TableDataProps) {
  const { children } = props
  return <td>{children}</td>
}
