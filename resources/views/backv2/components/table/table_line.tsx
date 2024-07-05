interface TableLineProps {
  id: string
  children: JSX.Element<HTMLTableCellElement>[]
}

export function TableLine(props: TableLineProps) {
  const { children } = props
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" class="checkbox" />
        </label>
      </th>
      {children}
      <th>
        <button class="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  )
}
