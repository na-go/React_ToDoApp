import React, { useState, VFC, SetStateAction, Dispatch, } from 'react'
import { Task } from '../type'

interface InputBarProps{
  inputTitle:string,
  setInputTitle:Dispatch<SetStateAction<string>>,
  handleSubmit: () => void,
  task:Task[]
}

export const InputBar = (
  props: InputBarProps
  ) => {

  return (
    <div className='input-bar'>
      <input
        type="text"
        className="input-task"
        value={props.inputTitle}
        onChange={(e) => {props.setInputTitle(e.target.value)}}
        placeholder="TODO入力欄"
      />
      <button className='input-button' onClick={props.handleSubmit}>追加する</button>
    </div>
  )
}
