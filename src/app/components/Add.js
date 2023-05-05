import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../features/todo/todoSlice'

export default function Add(props) {

  const dispatch = useDispatch()
  return (
    <div>
        <input type="text" onChange={(e)=>{
            props.setInputItem(e.target.value)
        }}
        value={props.inputItem}
        />
        <button onClick={()=>{
          dispatch(addItem(props.inputItem))
        }}>add</button>
    </div>
  )
}
