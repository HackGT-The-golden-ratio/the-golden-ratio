import './style.css'
import Configuration1 from './Configuration1'
import Configuration2 from './Configuration2'
import Configuration3 from './Configuration3'
import Result from '../Result'
import React, { useState } from 'react'

function Configuration() {
  const [userTaste1, setUserTaste1] = useState("") 
  const [userTaste2, setUserTaste2] = useState("") 
  const [userTaste3, setUserTaste3] = useState("") 

  const handleClick1 = (option) => {
    setUserTaste1(option)
  }
  const handleClick2 = (option) => {
    setUserTaste2(option)
  }
  const handleClick3 = (option) => {
    setUserTaste3(option)
  }

  const config_list = [ <Configuration1 handleClick={handleClick1} />,
                        <Configuration2 handleClick={handleClick2} />,
                        <Configuration3 handleClick={handleClick3} /> ]
  const [index, setIndex] = useState(0)

  return (
    <div className="container">
      {config_list[index]} 

      <button className="next-btn" onClick={() => {
        if (index === 2) {
          setIndex(0)
        } else {
          setIndex(index + 1)
        }
      }}>NEXT</button>

      <Result result1={userTaste1}
            result2={userTaste2}
            result3={userTaste3} />
    </div>
  )
}

export default Configuration
