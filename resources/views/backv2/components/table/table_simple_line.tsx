interface TableSimpleLineProps {
  dataLine: { [key: string]: string }
}

export function TableSimpleLine(props: TableSimpleLineProps) {
  const { dataLine } = props
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" class="checkbox" />
        </label>
      </th>
      {Object.values(dataLine).map((data) => (
        <td>{data}</td>
      ))}
      <th>
        <button class="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  )
}
