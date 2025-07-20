import React from 'react'

const ZoomEffect = (Sentece) => {
  return (
    <div style={{ width: "300px" , height: "300px" }}>
        {Array.from(Sentece).map((letter) => {
            return  <div key={Math.random()}>{letter}</div>
        })}
    </div>
  )
}

export default ZoomEffect