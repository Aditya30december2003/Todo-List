import React , {useState} from 'react'
import { database } from '../Appwrite/appwriteConfig';
import {v4 as uuidv4} from 'uuid'
const TodoForm = () => {

  const [todo , setTodo] = useState("")

  const handleSubmit = (e) =>{
   e.preventDefault();
  
   const promise =database.createDocument("65c3b9197c661a56a1a9","65c3b922657323e3b50d" , uuidv4() , {todo})
   console.log(promise)
    promise.then(
      function(response){
        console.log(response)
        window.location.reload()
      }
      ,
      function(error){
        console.log(error)
      }
    )
  }

  return (
    <div className=' mx-auto w-[75%] items-center  p-4 py-10'>
      <form action="" onSubmit={handleSubmit}>
      <input
      onChange={(e)=>{
        setTodo(e.target.value)
      }}
      type="text" placeholder='Enter todo here' className='border-2 mx-auto w-[85%] outline-none p-2'/>
      <button type='submit' className='bg-purple-500 text-white font-bold rounded-md p-2 ml-[1rem]'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm
