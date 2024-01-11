import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const PageMenu = () => {
  return (
    <nav className='--btn-google --p --mb'>
    

    <ul className='home-links'>
        
        <li>
            <NavLink to='/profile' >Profile</NavLink>
        </li>
        <li>
            <NavLink to='/changePassword' >Change Password</NavLink>
        </li>
        <li>
            <NavLink to='/user' >User</NavLink>
        </li>
        
    </ul>
</nav>
  )
}

export default PageMenu