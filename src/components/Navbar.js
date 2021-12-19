import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
    return (
        <div className='px-5 navigation d-flex justify-content-around '>
            <div className='align-self-center'>
                <img src={logo} alt="" />
            </div>
      
            
            <div className='mt-3'>
            <ul className="navbar-list list-unstyled d-flex ">
                <li className='mx-4'>
                    <Link to='/'>Home</Link>

                </li>
                <li className='mx-4'>
                    <Link to='/about'>About</Link>
                    
                </li>
            </ul>
            </div>
           
        </div>
    )
}
