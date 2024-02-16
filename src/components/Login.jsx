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
            navigate("/Todo-List/profile")
        } catch (error) {
            console.log(error)
        }
    }

    

  return (
    <div>
      <div className='w-full h-screen relative'>
        <div className='h-screen w-full absolute bg-black/60'>
            {/* header */}
            <div className='flex items-center justify-between'>
            <div className='text-[2.3rem] md:text-[3rem] font-bold text-white '>
               
            </div>
            <NavLink to='/Food_Delivery_App' className='hidden md:text-white md:text-[1.3rem] md:mr-[6rem]'>Home</NavLink>
            </div>

            {/* signup-card */}
            <form action="#" method="POST">
            <div className='bg-red-500/70 w-11/12 md:w-2/3 lg:w-1/3 mx-auto md:mt-7 mt-20 p-5'>
                <h1 className='text-[2rem] text-white font-bold'>Login</h1>
                <div className='flex flex-col gap-5 my-5'>
                <input onChange={(e)=>{
                  setUser({
                    ...user,
                    email:e.target.value
                  })
                }} required id='email' name='email' type="text" placeholder='Email'  className='px-2 py-3 rounded-md outline-none bg-white text-black font-bold' />
                <input onChange={(e)=>{
                  setUser({
                    ...user,
                    password:e.target.value
                  })
                }} type="password" placeholder='Password' className='px-2 py-3 rounded-md outline-none bg-white text-black font-bold' />
                </div>
                 <button onClick={loginUser} className='w-full mt-7 rounded-md bg-red-800 border-none text-white font-bold p-2'>Login</button>
              <div className='text-white p-2 font-bold'>
                Dont have an Account? <NavLink className='cursor-pointer' to='/Todo-List/signup'>Sign Up</NavLink>
              </div>
            </div>
            <div>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
