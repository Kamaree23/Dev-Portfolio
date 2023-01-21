import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className='grid'>
      <div className='num1'>
        <h5>
          <Link to=' '> Travel API </Link>
        </h5>
        <h6>
          <pre> Here is a Travel Application 
            <br></br> that I Engineered using CRUD and 
            <br></br> a REST API.</pre>
        </h6> 
      </div>
      <div className='num2'>
        <h5>
          <Link to=' '> Pokemon Game </Link>
        </h5>
        <h6>
          <pre> Using Django I created a <br></br> fullstack program to search, catch<br></br> and battle with pokemon</pre>
        </h6>
      </div>
      <div className='num3'>
        <h5>
          <pre> 
            <Link to=' '>ROI Calculator</Link>
            </pre>
        </h5>
        <h6>
          <pre> Calculate Your ROI here! </pre>
        </h6>
      </div>
    </div>
  )
}
