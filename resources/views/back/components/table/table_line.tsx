interface TableLineProps {
  id: string
  children: JSX.Element<HTMLTableCellElement>[]
  disabled?: boolean
}

export function TableLine(props: TableLineProps) {
  const { children, id, disabled = false } = props
  return (
    <tr data-id={id}>
      <th>
        <label>
          <input type="checkbox" class="checkbox" data-table-checkbox="" disabled={disabled} />
        </label>
      </th>
      {children}
    </tr>
  )
}
