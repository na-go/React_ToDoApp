import React, { SetStateAction, Dispatch, MouseEventHandler } from "react"
import { Task } from "../type"

interface EditModalProps{
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
  showModal: Task | undefined
  setShowModal: Dispatch<SetStateAction<Task | undefined>>
  inputTitle:string
  setInputTitle: Dispatch<SetStateAction<string>>
}

export const EditModal = (
  props: EditModalProps
) => {

  const handleEdit = (
    showModal:Task,
    inputTitle:string,
    setInputTitle: Dispatch<SetStateAction<string>>
    ) => {
    const newTask = {
      id: showModal.id,
      title: inputTitle,
      done: false
    }
    props.setTasks([newTask, ...props.tasks])
    setInputTitle('')
    props.setShowModal(undefined)
  }

  const handleDelete = () => {
    props.setShowModal(undefined)
  }

  return (
      <>
      {props.showModal &&
        <div id="overlay">
          <div id="modalContent">
            <p>修正を記述してください</p>
            <input
              type="text"
              className='edit-input'
              value={props.inputTitle}
              onChange={(e) => {props.setInputTitle(e.target.value)}}
            ></input>
            <button onClick={handleEdit(props.showModal, props.inputTitle, props.setInputTitle)}>変更</button>
            <button onClick={handleDelete}>削除</button>
            <button onClick={() => props.setShowModal(undefined)}>やめる</button>
          </div>
        </div>
      }
      </>
    )
}