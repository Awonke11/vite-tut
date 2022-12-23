import { useState } from 'react'
import './App.css'

interface Todo {
  name: string
}

function App() {
  const [todo, setTodo] = useState<string>("")
  const [data, setData] = useState<Todo[]>([])

  return (
    <div className="App">
      <div>
        <input 
          type="text" 
          placeholder='Enter todo' 
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => {
          setData(prev => [...prev, {
            name: todo
          }])
          setTodo("")
        }}>Add Todo</button>
      </div>
      <div>
        {
          data.map((item, index) => {
            return <p key={index}>{item.name}</p>
          })
        }
      </div>
    </div>
  )
}

export default App
