import React from 'react'
import './style.css';

function Test( { result1, result2, result3 } ) {
  return (
    <div className="test">
        <div className="results">
            <div>
                This is the user result from select page #1 = {result1} <br/>
                This is the user result from select page #2 = {result2} <br/>
                This is the user result from select page #3 = {result3} <br/>
            </div>
        </div>
    </div>
  )
}

export default Test