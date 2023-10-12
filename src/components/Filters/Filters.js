import React from 'react'
import {NavLink, Link} from "react-router-dom"

const Filters = () => {
  return (
    <div className="text-center poppins">
      <Link className='mx-4'>All</Link>
      <Link className='mx-4'>Alive</Link>
      <Link className='mx-4'>Dead</Link>
      <Link className='mx-4'>Unknown</Link>
    </div>
  )
}

export default Filters
