import { useState } from 'react'
import ListTrainer from './pages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <button
        className="btn btn-success"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
      <ListTrainer>

      </ListTrainer>

    </>
  )
}

export default App