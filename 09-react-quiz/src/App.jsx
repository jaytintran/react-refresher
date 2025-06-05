import { useState } from 'react'
import './App.css'
import DateCounter from './DateCounter'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DateCounter />
    </>
  )
}

