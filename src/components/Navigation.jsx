import React from 'react'
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='mt-5' style={{ fontFamily: "josefin sans" }}>
      <ul className='d-flex'>
        <li className='btn mx-2' style={{ backgroundColor: "#051c33" }}><NavLink to="/mountain" className=" text-white nav-link">Mountain</NavLink></li>
        <li className='btn mx-2' style={{ backgroundColor: "#051c33" }}><NavLink to="/beach" className="text-white nav-link">Beaches</NavLink></li>
        <li className='btn mx-2' style={{ backgroundColor: "#051c33" }}><NavLink to="/bird" className="text-white nav-link">Birds</NavLink></li>
        <li className='btn mx-2' style={{ backgroundColor: "#051c33" }}><NavLink to="/food" className="text-white nav-link">Food</NavLink></li>
      </ul>
    </div>
  )
}

export default Navigation