import React , {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { database } from '../Appwrite/appwriteConfig';
import {v4 as uuidv4} from 'uuid'
const TodoForm = () => {

const [todo , setTodo] = useState("")
const [date , setDate] = useState("")
const [subtask , setSubTask] = useState("")
const [open , setOpen] = useState(false)

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
      <form action=""  className='flex'>
      <input
      onClick={()=>{setOpen(!open)}}
      type="text" placeholder='Enter todo here' className='bg-transparent px-2 py-3  outline-none border-b-2 border-red-700 font-bold w-[85%] text'/>
      <button type='submit' className='card text-white  text-[0.8rem] lg:text-[1rem] font-bold rounded-md p-1 md:p-2 md:ml-[1rem]'>Add Todo</button>
      </form>
      <div className={open?'card2 fixed opacity-100 bg-red-950/80 z-10 h-screen w-full top-0 left-0':'absolute opacity-0'}>
<div className='card w-[97%] md:w-[50%] lg:w-[40%] mx-auto mt-[2%] p-3 rounded-[1rem]'>
    <div className='flex items-center justify-between'>
      <h1 className='font-bold '>Create a Todo</h1>
      <p className='cursor-pointer' onClick={()=>setOpen(!open)}><AiOutlineClose/></p>
    </div>
    <div className='py-3'>
      <textarea 
      onSubmit={handleSubmit}
      onChange={(e)=>{
        setTodo(e.target.value)
      }} className='w-full outline-none bg-transparent' placeholder='What do you want to do?' name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div className='flex items-center justify-between'>
    <div onClick={handleSubmit} className='text-white card2  w-full text-center cursor-pointer mr-5 px-4 py-2 rounded-[1.3rem] font-bold'>
      <button type='submit'>Post</button>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default TodoForm


