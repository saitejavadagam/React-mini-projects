import React from 'react'

const SecondHand = React.memo(({seconds}) => {
  return (
    <g transform={`rotate(${seconds * 6})`}>
    <rect width=".5" height="30" x="-.25" y="-30" fill="black" />
  </g>
  )
});

export default SecondHand