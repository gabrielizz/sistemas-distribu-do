import {useState} from 'react'

import { NavLink} from 'react-router-dom'
import {links} from '../data'
import './navbar.css'


import {AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
  const [isNavOn, setIsNavOn] = useState(false);

  return (
    <nav>
      <div className='container nav_container'>
        <ul className={`nav_links ${isNavOn ? 'on_nav' : 'off_nav'}`}>
          {
            links.map(({name, path}, index)=>{
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : '' }  onClick={()=> setIsNavOn(prev => !prev)}> {name} </NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className='nav_toggle-btn' onClick={()=> setIsNavOn(prev => !prev)}>
         {
          isNavOn ? <MdOutlineClose/>  : <AiOutlineMenu/>
         }
        </button>
      </div>
    </nav>

  )
}

export default Navbar