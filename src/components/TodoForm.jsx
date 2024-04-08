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
    <div className=' mx-auto w-[100%]  md:w-[75%] items-center  p-4 py-10'>
      <form action="" onSubmit={handleSubmit} className='flex'>
      <input
      onChange={(e)=>{
        setTodo(e.target.value)
      }}
      type="text" placeholder='Enter todo here' className='bg-transparent px-2 py-3  outline-none border-b-2 border-red-700 font-bold w-[85%] text'/>
      <button type='submit' className='card text-white  text-[0.8rem] lg:text-[1rem] font-bold rounded-md p-1 md:p-2 md:ml-[1rem]'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm
