import React from 'react'
import {Link} from "react-router-dom"

const Navigate = () => {
  return (
    <div className='navbar'>
      <details>
          <summary>Keffi</summary>
          <ul className='nav-links'>
              <li><Link to="register" className='links'>New Employee</Link></li>
              <li><Link to="table" className='links'>All Employees</Link></li>
              <li><Link to="appraisal" className='links'>Appraisal Form</Link></li>
              <li><Link to="dashboard" className='links'>Dashboard</Link></li>
          </ul>
      </details>
    </div>
  )
}

export default Navigate
