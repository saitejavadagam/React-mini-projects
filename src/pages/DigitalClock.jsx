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
    <div className='flex flex-col items-center gap-10 font-bold text-5xl'>
        <h1 className='mt-10'>Digital Clock</h1>
        <p>{time}</p>

    </div>
  )
}

export default DigitalClock