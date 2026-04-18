import React from 'react'

const MinuteHand = React.memo(({minutes}) => {
  return (
    <g transform={`rotate(${minutes * 6})`}>
            <rect width="2" height="28" x="-1" y="-28" fill="navy" />
          </g>
  )
})

export default MinuteHand