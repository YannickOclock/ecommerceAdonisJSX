import { useState } from 'preact/hooks'

export function App(props: { name: string }) {
  const [count, setCount] = useState(0)

  console.log(`Hello ${props.name} - ${count}!`)

  return (
    <>
      <h1 onClick={() => setCount((value) => value + 1)}>
        Hello {props.name} - {count}!
      </h1>
    </>
  )
}
