interface TableHeaderProps {
  fields: string[]
}

export function TableHeader(props: TableHeaderProps) {
  const { fields } = props
  return (
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" data-table-checkbox="" />
          </label>
        </th>
        {fields.map((field) => (
          <th>{field}</th>
        ))}
      </tr>
    </thead>
  )
}
