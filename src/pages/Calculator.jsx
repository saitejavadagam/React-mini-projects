/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

const Calculator = ({setGradient}) => {

    useEffect(()=>{
        setGradient("bg-linear-to-r from-green-400 to-teal-500")
    },[])

  return (
    <div>Calculator</div>
  )
}

export default Calculator