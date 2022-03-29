import React, { useEffect, useState, VFC } from 'react'
import { Task } from './type'
import { InputBar } from './component/input_bar'
import { Auth0Provider } from '@auth0/auth0-react'
import LoginButton from './auth0/login'
import LogoutButton from './auth0/logout';
import Profile from './auth0/profile'

const initialTask: Task[] = [
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
  const [inputTitle, setInputTitle] = useState<string>('')
  const [editTitle, setEditTitle] = useState<string>('')
  const [showModal, setShowModal] = useState<Task | undefined>()
  const [countId, setCountId] = useState<number>(tasks.length + 1)

  const handleSubmit = () => {
    const newTask: Task = {
      id: countId,
      title: inputTitle,
      done: false
    }
    setTasks([...tasks, newTask])
    setInputTitle('')
  }

  const handleDone = (task: Task) => {
  }

  const handleEdit = (showModal: Task) => {
    const editedTask: Task[] = tasks.map((task: Task) => {
      if (task.id === showModal.id) {
        const editTask: Task = {
          id: showModal.id,
          title: editTitle,
          done: false
        }
        return editTask
      }
      return task
    })
    setTasks([...editedTask])
    setEditTitle('')
    setShowModal(undefined)
  }

  const handleDelete = (choosedTask: Task) => {
    const afterDeleteTasks: Task[] = tasks.filter(task =>
      task.id !== choosedTask.id)
    const rerollIdTasks: Task[] = afterDeleteTasks.map((task: Task, key) => {
      const rerollIdTask: Task = {
        id: key + 1,
        title: task.title,
        done: false
      }
      return rerollIdTask
    })
    setTasks(rerollIdTasks)
    setShowModal(undefined)
  }

  useEffect(() => {
    setCountId(tasks.length + 1)
  })


  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <Profile />
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
              <li key={task.id} className={'task-id'}>
                {task.id}.
                <input
                  type="checkbox"
                  className="checkbox-input"
                  onClick={() => handleDone(task)}
                  defaultChecked={task.done}
                />
                <label>
                  <span className="checkbox-label">{task.title}</span>
                </label>
                <button
                  onClick={() => setShowModal(task)}
                  className="btn-edit"
                >
                  編集
                </button>
              </li>
            ))}
          </ul>
        }

        {showModal &&
          <div id="overlay">
            <div id="modalContent">
              <p>{showModal.id}番目の修正を記述してください</p>
              <input
                type="text"
                className='edit-input'
                value={editTitle}
                defaultValue={showModal.title}
                onChange={(e) => { setEditTitle(e.target.value) }}
              />
              <button onClick={() => handleEdit(showModal)}>変更</button>
              <button onClick={() => handleDelete(showModal)}>削除</button>
              <button onClick={() => setShowModal(undefined)}>やめる</button>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default App
