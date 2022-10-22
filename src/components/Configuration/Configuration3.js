import React from 'react'
import './detail_style.css';

function Configuration3( {handleClick} ) {
  return (
    <div className="config">
      <div className="select" onChange={ e => {
        handleClick(e.target.value)
      }}> 
        Configuration #3
        <input type="radio" value="A" name="select" /> A
        <input type="radio" value="B" name="select" /> B
        <input type="radio" value="C" name="select" /> C
      </div>
    </div>
  )
}

export default Configuration3