import React, { useState, VFC, SetStateAction, Dispatch, } from 'react'
import { Task } from '../type'

interface InputBar{
  inputTitle:string,
  setInputTitle:Dispatch<SetStateAction<string>>,
  handleSubmit: () => void,
  task:Task[]
}

export const InputBar:InputBar = (
  inputTitle:string,
  setInputTitle:Dispatch<SetStateAction<string>>,
  handleSubmit:() => void,
  tasks:Task[]
  ) => {

  return (
    <div className='input-bar'>
      <input
        type="text"
        className="input-task"
        value={inputTitle}
        onChange={(e) => {setInputTitle(e.target.value)}}
        placeholder="TODO入力欄"
      />
      <button className='input-button' onClick={handleSubmit}>追加する</button>
      <button onClick={() => {console.log(tasks)}}>確認</button>
    </div>
  )
}
