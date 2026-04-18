import React from 'react'

const HourHand = React.memo(({hours,minutes}) => {
  
  const angle = (hours % 12) * 30 + minutes * 0.5;
  return (
    <g transform={`rotate(${angle})`}>
        <rect width="2" height="18" x="-1" y="-18" fill="red" />
    </g>
  )
});

export default HourHand