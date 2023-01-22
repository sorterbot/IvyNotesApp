import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='app-header'>
    <Link to="/">
    <div>Home</div>
    </Link>
    </div>
  )
}
