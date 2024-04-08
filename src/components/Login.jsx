import React , {useState} from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import { account } from '../Appwrite/appwriteConfig';

const Login = () => {
    const navigate = useNavigate();
    const [user , setUser ] = useState({
      email:"",
      password:""
    })

    const loginUser= async(e)=>{
        e.preventDefault();

        try {
            await account.createEmailSession(user.email , user.password)
            navigate("/profile")
        } catch (error) {
            console.log(error)
        }
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
            <div className='card shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] card w-11/12 md:w-2/3 lg:w-1/3 mx-auto mt-4 md:mt-7 lg:mt-[2rem] rounded-md p-5'>
                <h1 className='text-[2rem] font-bold'>Login</h1>
                <div className='flex flex-col gap-5 my-5'>
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
                }} type="password" placeholder='Password' className='bg-transparent  px-2 py-3  outline-none border-b-2 border-red-700 font-bold' />
                </div>
                 <button onClick={loginUser} className='w-full mt-7 rounded-md bg-red-800 text-white border-none  font-bold p-2'>Login</button>
              <div className=' p-2 font-bold'>
                Dont have an Account? <NavLink className='cursor-pointer' to='/signup'>Sign Up</NavLink>
              </div>
            </div>
            <div>
            </div>
            </form>
        </div>
        {/* <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/9738992/pexels-photo-9738992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> -- */}
    </div>
    </div>
  )
}

export default Login
