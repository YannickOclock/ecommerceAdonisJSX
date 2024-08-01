interface TableLineProps {
  id: string
  children: JSX.Element<HTMLTableCellElement>[]
}

export function TableLine(props: TableLineProps) {
  const { children, id } = props
  return (
    <tr data-id={id}>
      <th>
        <label>
          <input type="checkbox" class="checkbox" data-table-checkbox="" />
        </label>
      </th>
      {children}
    </tr>
  )
}
