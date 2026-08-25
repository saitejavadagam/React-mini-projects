/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = ({ setGradient }) => {

  const [result, setResult] = useState("0");

  const handleClick = (e) => {
    const value = e.target.innerText;
    setResult(result === "0" ? value : result + value);
  }

  const compute = () => {
    setResult(evaluate(result.replace('x', '*')));
  }

  const clear = () => {
    setResult("0");
  }


  useEffect(() => {
    setGradient("bg-linear-to-r from-green-400 to-teal-500")
  }, [])

  return (
    <div className='flex justify-center items-center h-screen bg-linear-to-br from-teal-400 to-green-500'>
      <div className='w-[400px] h-[600px] p-5 rounded-2xl bg-[linear-gradient(315deg,#485461_0%,#28313b_74%)]'>

        {/* Screen */}
        <div className='w-full overflow-hidden text-right'>
          <span className='block truncate text-6xl text-white py-5'>
            {result}
          </span>
        </div>

        {/* ButtonBox */}
        <div className='w-full h-[calc(100%-110px)] grid grid-cols-4 grid-rows-5 gap-2.5'>

          {
            btnValues.flat().map((btn, i) => (
              <button
                key={i}
                className={`border-none outline-none text-2xl text-white font-bold cursor-pointer rounded-[10px] shadow-md ${btn === '=' ? "bg-[#f33d1d] hover:bg-[#e4270f] col-[3/5]" : "bg-[#503cd1]  hover:bg-[#3d2bb8]"}`}
                onClick={btn === '=' ? compute : btn === 'C' ? clear : handleClick}
              >
                {btn}
              </button>
            ))
          }

        </div>



      </div>
    </div>
  )
}

export default Calculator