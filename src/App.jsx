import { useState } from 'react'
import Filter from './components/Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Filter/>
    </div>
  )
}

export default App
