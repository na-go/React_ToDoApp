import React, { useState, VFC } from 'react'
import { Task } from './type'
import { InputBar } from './component/input_bar'

const initialTask:Task[] = [
  {
    id: 1,
    title: 'やること1',
    done: false
  },
  {
    id: 2,
    title: 'やること2',
    done: false
  }
]

const App: VFC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTask)
  const [inputTitle, setInputTitle] = useState<string>(' ')
  const [showModal, setShowModal] = useState<boolean>(false)
  const [countId, setCountId] = useState<number>(tasks.length + 1)

  const handleSubmit = () => {
    const newTask = {
      id: countId,
      title: inputTitle,
      done: false
    }
    setTasks([newTask, ...tasks])
    setInputTitle('')
    setCountId(countId + 1)
  }

  const handleDone = (task: Task) => {
  }

  const handleEdit = () => {
    setShowModal(true)
  }

  const Modal = () => {
    return (
      <>
      {showModal &&
        <div id="overlay">
          <div id="modalContent">
            <p>修正を記述してください</p>
            <input
              type="text"
              className='edit-input'
              onClick={() => handleEdit()}
            ></input>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      }
      </>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        To-Do あぷり
      </header>

      <InputBar
        inputTitle={inputTitle}
        setInputTitle={setInputTitle}
        handleSubmit={handleSubmit}
        task={tasks}
      />
      <div className='inner'>
        {tasks.length <= 0 ? '何も登録されてないよ' :
        <ul className="task-list">
          ToDo一覧だよ
          {tasks.map((task) => (
            <li className='task-id`${task.id}`'>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => handleDone(task)}
                    defaultChecked={ task.done }
                />
              <label>
                <span className="checkbox-label">{ task.title }</span>
              </label>
              <button
                onClick={() => handleEdit()}
                className="btn-edit"
              >
                編集
              </button>
            </li>
          ))}
        </ul>
        }
        <Modal />

      </div>
    </div>
  )
}

export default App
