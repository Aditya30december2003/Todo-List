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
        <Route path='/blog/signup' element={<SignUp />}/>
        <Route path='/blog/' element={<Login />}/>
        <Route path='/blog/profile' element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App
