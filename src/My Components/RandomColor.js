import React from 'react'

function RandomColor(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.color }}>{props.color}</h2>
    </div>
  )
}

export default RandomColor
