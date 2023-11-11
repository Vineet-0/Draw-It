import { useState } from 'react'
import Main from './Components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main />
    </>
  )
}

export default App
