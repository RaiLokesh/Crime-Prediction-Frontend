import React from 'react'

const Prediction = ({lat, lon}) => {
  return (
    <div>
        <h2>Latitude:{lat}</h2>
        <h2>Longitude:{lon}</h2>
    </div>
  )
}

export default Prediction