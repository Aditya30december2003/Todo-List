import { useState } from 'react'
import {Routes , Route , BrowserRouter } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/Todo-List/signup' element={<SignUp />}/>
        <Route path='/Todo-List/' element={<Login />}/>
        <Route path='/Todo-List/profile' element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App
