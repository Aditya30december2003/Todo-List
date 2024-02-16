import React , {useEffect , useState} from 'react'
import { database } from '../Appwrite/appwriteConfig';

function Todos() {
  const [todos , setTodos] = useState()
  const[loader , setLoader] = useState(false)

  useEffect(()=>{
    setLoader(true)
    const getTodos =database.listDocuments("65c3b9197c661a56a1a9" ,"65c3b922657323e3b50d")
    getTodos.then(
      function(response){
        setTodos(response.documents)
        setLoader(false)
      },
      function(error){
        console.log(error)
      }
    )
  } , [])

  const deleteTodo = (id) => {
    const promise =  database.deleteDocument("65c3b9197c661a56a1a9" ,"65c3b922657323e3b50d",id)
    promise.then(
     function(response){
         console.log(response);
         window.location.reload()
     },
     function(error){
         console.log(error);
     }
   )
 }


  return (
    <div className="max-w-7xl mx-auto">
    <p className="text-xl font-bold mb-2 text-center">Todo List</p>
    {loader ? (
      <p>Loading ...</p>
    ) : (
      <div>
        {todos &&  todos.map(item => (
              <div key={item.$id} >
              <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1 w-[72%] mx-auto">
                <div>
                  <p>{item.todo}</p>
                </div>
                <div>
                  <span
                    className="text-red-400 cursor-pointer"
                    onClick={() => {
                      deleteTodo(item.$id)
                    }}
                  >
                    Delete
                  </span>
                </div>
              </div>
            </div>
            )) }
          
      </div>
    )}
  </div>
  )
}

export default Todos
