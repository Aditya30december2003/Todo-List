import React, { useEffect, useState } from 'react';
import { database } from '../Appwrite/appwriteConfig';
import { FaTrash } from 'react-icons/fa';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { RiCheckboxFill } from 'react-icons/ri';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(false);
  
  useEffect(() => {
    setLoader(true);
    const getTodos = database.listDocuments('65c3b9197c661a56a1a9', '65c3b922657323e3b50d');
    getTodos.then(
      function (response) {
        setTodos(response.documents);
        setLoader(false);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const deleteTodo = (id) => {
    const promise = database.deleteDocument('65c3b9197c661a56a1a9', '65c3b922657323e3b50d', id);
    promise.then(
      function (response) {
        console.log(response);
        const updatedTodos = todos.filter((todo) => todo.$id !== id);
        setTodos(updatedTodos);
      },
      function (error) {
        console.log(error);
      }
    );
  };
  
  useEffect(() => {
    const getTodos = database.listDocuments('65c3b9197c661a56a1a9', '65c3b922657323e3b50d');
    getTodos.then(
      function (response) {
        setTodos(response.documents);
        localStorage.setItem('todos', JSON.stringify(response.documents)); // Save todos from database to local storage
        setLoader(false);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2 text-center text-white">Todo List</p>
      {loader ? (
        <p className="text-center text font-bold text-[1.3rem]">Loading ...</p>
      ) : (
        <div>
          {todos &&
            todos.map((item) => (
              <div key={item.$id}>
                <div
                  className={
                    !item.completed
                      ? 'duration-250 p-4 flex items-center justify-between mt-2 medium font-bold text-[1.1rem] text-white rounded-lg mb-1 w-[100%] md:w-[72%] mx-auto'
                      : 'line-through duration-250 p-4 flex items-center justify-between mt-2 cross font-bold text-[1.1rem] text-white rounded-lg mb-1 w-[100%] md:w-[72%] mx-auto'
                  }
                >
                  <div>
                    <p>{item.todo}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-white cursor-pointer"
                      onClick={() => {
                        deleteTodo(item.$id);
                      }}
                    >
                      <FaTrash />
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Todos;

