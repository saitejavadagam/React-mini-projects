/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'

const Counter = ({setGradient}) => {

  const [count,setCount] = useState(0);

  const btnBase = 'rounded-lg p-3 font-semibold text-2xl m-2 w-35';
  const gradient = "bg-linear-to-r to-amber-600 from-orange-600";
  useEffect(()=>{
    setGradient(gradient);
  },[])

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-400 to-orange-500 pt-25">
      <div className='bg-white/30 backdrop-blur-md flex flex-col items-center gap-5 text-white px-6 py-3 rounded-2xl shadow-lg text-shadow-lg max-w-2xl mx-auto pb-20'>
      <h1 className='text-6xl font-bold mt-20'>Counter App</h1>
      <h1 className='text-8xl font-bold mt-10'>{count}</h1>

      <div className='text-white mt-10'>
        <button className={`${btnBase} bg-blue-600`} onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <button className={`${btnBase} bg-gray-200 text-black`} onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
        <button className={`${btnBase} bg-red-600`} onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
    </div>
  )
}

export default Counter