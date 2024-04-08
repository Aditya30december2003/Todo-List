import React , {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../Appwrite/appwriteConfig';
import TodoForm from '../components/TodoForm'
import Todos from '../components/Todos'
const Profile = () => {
    const navigate = useNavigate()

    const [userDetails , setUserDetails] = useState()
    useEffect(()=>{
     const getData = account.get();
     getData.then(
        function(response){
            setUserDetails(response)
            console.log(userDetails)
        },
        function(error){
            console.log(error)
        }
     )
    } , [])

   //logout
  

   const handleLogout= async()=>{
    try{
        await account.deleteSession("current")
        navigate("/")
    }
    catch(error){
      console.log(error)
    }
   }

  return (
    <>
    {userDetails ? (
    <>
    <div className='flex justify-between items-center mx-auto w-[95%] lg:w-[80%] mt-5 p-2'>
        <div>
            <h1 className='text-white font-bold text-[1.5rem]'>Hello {userDetails.name}</h1>
        </div>
        <div onClick={handleLogout}>
            <button className='font-bold text-white card rounded-md p-2'>Logout</button>
        </div>
    </div>

    <TodoForm />
    <Todos />
    </>
    ) : (
        <>
        <p>Please login to see the profile</p>
        <Link to='/'>Login</Link>
        </>
    )}
    </>
  )
}

export default Profile
