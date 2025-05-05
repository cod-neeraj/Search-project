import { useState } from 'react'
import SearchProject from './Page'
import { topics } from './data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchProject topics={topics}/>
    </>
  )
}

export default App
