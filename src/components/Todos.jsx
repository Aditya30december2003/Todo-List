import React , {useEffect , useState} from 'react'
import { database } from '../Appwrite/appwriteConfig';
import { FaTrash } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { RiCheckboxFill } from "react-icons/ri";

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
 const toggleTodo = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
      if (todo.$id === id) {
        // Toggle the 'completed' status for the clicked todo
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    })
  );
};

//  const doneTodo = (id) => {
//    setIcon(!icon , id)
// }


  return (
    <div className="max-w-7xl mx-auto">
    <p className="text-xl font-bold mb-2 text-center text-white">Todo List</p>
    {loader ? (
      <p className='text-center text font-bold text-[1.3rem]'>Loading ...</p>
    ) : (
      <div>
        {todos &&  todos.map(item => (
              <div key={item.$id} >
              <div className={!item.completed?"duration-250 p-4 flex items-center justify-between mt-2 medium font-bold text-[1.1rem] text-white rounded-lg mb-1 w-[100%] md:w-[72%] mx-auto":"line-through duration-250 p-4 flex items-center justify-between mt-2 cross font-bold text-[1.1rem] text-white rounded-lg mb-1 w-[100%] md:w-[72%] mx-auto"}>
                <div>
                  <p>{item.todo}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <span
                    className="text-white cursor-pointer duration-300"
                    onClick={() =>{toggleTodo(item.$id)}}>
                    {item.completed ? <RiCheckboxFill size={23} /> : <MdOutlineCheckBoxOutlineBlank size={23} />}
                  </span>
                  <span
                    className="text-white cursor-pointer"
                    onClick={() => {
                      deleteTodo(item.$id)
                    }}
                  >
                    <FaTrash  />
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
