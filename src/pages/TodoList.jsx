/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'

const TodoList = ({setGradient}) => {

    const [input, setInput] = useState("");

    const gradient = "bg-linear-to-r to-purple-700 from-indigo-700"

    const [todos,setTodos] = useState(()=>{
        const saved = localStorage.getItem("todos");

        return saved ?JSON.parse(saved):[];
    });

    const addTodo = ()=>{
        if(input.trim()=="")return;
        setTodos([...todos, {id:Date.now(),text:input}]);
        setInput("");
    }

    const deleteTodo = (id)=>{
        setTodos(todos.filter(todo => id!=todo.id))
    }

    useEffect(()=>{
      setGradient(gradient);
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);


  return (
    <div className={`min-h-screen pt-25 bg-linear-to-br from-purple-500 to-indigo-600 flex flex-col items-center p-10 text-white`}>

        <h1 className='font-extrabold text-5xl mb-10 drop-shadow-lg'>Todo List</h1>


        <div className='bg-white/20 backdrop-blur-md rounded-xl p-5 flex gap-4 w-full max-w-2xl shadow-xl'>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}
            className= 'bg-white/80 text-black flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow'
            placeholder='Enter a task...'
            />
            <button onClick={addTodo}
            className='bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition shadow'
            >Add</button>
        </div>

        <ul className='mt-8 w-full max-w-2xl space-y-4'>
        {todos.map(todo => (
          <li key={todo.id}
          className='bg-white/20 backdrop-blur-md p-4 rounded-lg shadow flex justify-between items-center font-medium'
          >
            <span>{todo.text}</span>

            <button
            onClick={()=>deleteTodo(todo.id)}
            className='bg-red-500 px-3 py-1 rounded hover:bg-red-600'>
                Delete
            </button>

          </li>
        ))}
        </ul>

    </div>
  )
}

export default TodoList