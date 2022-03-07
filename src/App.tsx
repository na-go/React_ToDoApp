import React, { useState, VFC } from 'react'

type Task = {
    id: number
    title: string
    done: boolean
}

const initialTask:Task[] = [
  {
    id: 1,
    title: 'やること',
    done: false
  }
]

const App: VFC = () => {
  const [inputTask, setInputTask] = useState<string>('')
  const [inputTitle, setInputTitle] = useState<string>(' ')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  const handleSubmit = () => {
    setInputTask(inputTitle)
  }

  return (
    <div className="App">
      <header className="App-header">
        To-Do App
      </header>

      <div className='input-bar'>
        <input
          type="text"
          className="input-task"
          value={inputTitle}
          onChange={handleInputChange}
          placeholder="TODO入力欄"
        />
        <button className='input-button' onClick={handleSubmit}>追加する</button>
      </div>
    </div>
  )
}

export default App
