import React , {useState} from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import { account } from '../Appwrite/appwriteConfig';
import {v4 as uuidv4} from 'uuid'

const Signup = () => {
  const navigate = useNavigate();
  const [user , setUser ] = useState({
    name:"",
    email:"",
    password:""
  })

  //Signup
  const signupUser = async(e)=>{ //async because fetching from database
    e.preventDefault()

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    )

    promise.then(
      function(response){
        console.log(response)
        navigate("/profile")  //success
      },
      function(error){
        console.log(error)
      }
    )
}
  


  return (
    <div>

    <div className='w-full h-screen relative'>
        <div className='h-screen w-full absolute'>
            {/* header */}
            <div className='flex items-center justify-between'>
            <div className='text-[2.3rem] md:text-[2.5rem] p-4 font-bold heading underline'>
            <h1>Todo-do-App</h1> 
            </div>
            </div>

            {/* signup-card */}
            <form action="#" method="POST">
            <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] card w-11/12 md:w-2/3 lg:w-1/3 mx-auto md:mt-7 rounded-md p-5'>
                <h1 className='text-[2rem] font-bold'>Sign Up</h1>
                <div className='flex flex-col gap-5 my-5'>
                <input onChange={(e)=>{
                  setUser({
                    ...user,
                    name:e.target.value
                  })
                }} required id='name' name='name' type="text" placeholder='Name'  className='bg-transparent px-2 py-3  outline-none border-b-2 border-red-700 font-bold' />
                <input onChange={(e)=>{
                  setUser({
                    ...user,
                    email:e.target.value
                  })
                }} required id='email' name='email' type="text" placeholder='Email'  className='bg-transparent px-2 py-3  outline-none border-b-2 border-red-700 font-bold' />
                <input onChange={(e)=>{
                  setUser({
                    ...user,
                    password:e.target.value
                  })
                }} type="password" placeholder='Password' className='bg-transparent px-2 py-3  outline-none border-b-2 border-red-700 font-bold' />
                </div>
                 <button onClick={signupUser} className='w-full mt-7 rounded-md bg-red-800 border-none text-white font-bold p-2'>Sign Up</button>
                 <div className=' p-2 font-bold'>
                Already Signed in? <NavLink className='cursor-pointer' to='/'>Log in</NavLink>
            </div>
            </div>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Signup
