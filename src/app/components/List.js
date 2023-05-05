import React from 'react'
import { useSelector } from 'react-redux'
export default function List(props) {
  let listItem = useSelector((state)=>state.todo.listItem)
  return (
    <div>
        <h1>List</h1>
        {
            listItem?.map((item, index)=>{
                return(
                    <>
                    <div>

                    {item}
                    </div>
                    
                    
                    </>
                )
            })
        }
    </div>
  )
}
