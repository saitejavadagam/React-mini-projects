import { useEffect, useState } from 'react'
import SecondHand from '../components/SecondHand';
import MinuteHand from '../components/MinuteHand';
import HourHand from '../components/HourHand';

const AnalogClock = ({setGradient}) => {


  useEffect(()=>{
        setGradient("bg-linear-to-r from-green-400 to-teal-500")
    },[])

  const fontSize = "8";
  const [time, setTime] = useState(new Date());

  const digits = [
    { number: "12", angle: 0 },
    { number: "1", angle: 30 },
    { number: "2", angle: 60 },
    { number: "3", angle: 90 },
    { number: "4", angle: 120 },
    { number: "5", angle: 150 },
    { number: "6", angle: 180 },
    { number: "7", angle: 210 },
    { number: "8", angle: 240 },
    { number: "9", angle: 270 },
    { number: "10", angle: 300 },
    { number: "11", angle: 330 },
  ];

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center" }} className='bg-white'>
      <h3>{time.toLocaleTimeString()}</h3>
      <svg viewBox="0 0 160 100" width="100vw" height="90vh">
        <g transform="translate(80,50)" fontSize={fontSize}>
          <circle r="42" fill="none" stroke="black" strokeWidth="2" />

          {digits.map(({ number, angle }) => (
            <g key={number} transform={`rotate(${angle})`}>
              <g transform={`translate(0, -33) rotate(-${angle})`}>
                <text textAnchor="middle" dominantBaseline="middle">
                  {number}
                </text>
              </g>
            </g>
          ))}

          {/* Hour hand */}
          <HourHand hours={time.getHours()} minutes={time.getMinutes()}/>

          {/* Minute hand */}
          <MinuteHand minutes={time.getMinutes()}/>

          {/* Seconds hand */}
          <SecondHand seconds={time.getSeconds()}/>

          <circle r="2" fill="black" />
        </g>
      </svg>
    </div>
  );
};

export default AnalogClock;
