/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const DigitalClock = ({setGradient}) => {
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
      setGradient("bg-linear-to-r from-yellow-500 to-green-500");
    },[]);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000)

        return ()=>clearInterval(timer);
    },[]);

  return (
   <div className='h-screen bg-linear-to-br from-yellow-300 to-green-300 font-bold text-5xl p-5 text-white/90 text-shadow-lg'>

    <h1 align="center" className='mt-10'>Digital Clock</h1>

    <div className='bg-black/20 backdrop-blur-md p-5 rounded-2xl shadow-md max-w-2xl mx-auto mt-10 flex justify-center text-8xl py-10'>
        <p className=''>{time}</p>
    </div>

   </div>
  )
}

export default DigitalClock