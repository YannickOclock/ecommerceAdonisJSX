import { useState } from 'preact/hooks'

interface CustomCounterProps {
  value?: string
}

export default function CustomCounter(props: CustomCounterProps) {
  const { value } = props
  const [counter, setCounter] = useState(value ? Number.parseInt(value) : 0)

  const updateCounter = () => {
    const newCounter = counter + 1
    setCounter(() => newCounter)
  }

  return (
    <div>
      Hello les gens / Compteur : {counter} /{' '}
      <button onClick={() => updateCounter()}>Incrémenter</button>
    </div>
  )
}
