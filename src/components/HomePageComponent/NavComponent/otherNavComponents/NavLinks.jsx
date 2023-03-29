import React from 'react'
import Btn from '../../Btn'

const NavLinks = () => {
  return (
    <ul className='nav__link'>
      <li className="nav__link--links"><Btn link="#" type="link" text="Home" /></li>
      <li className="nav__link--links"><Btn link="#" type="link" text="Library" /></li>
      <li className="nav__link--links"><Btn link="#" type="link" text="Commnity" /></li>
      <li className="nav__link--links"><Btn link="#" type="link" text="About Us" /></li>
      <li className="nav__link--links"><Btn link="#" type="link" text="Login" /></li>
      <li className="nav__link--links"><Btn link="#" type="link" text="Sign Up" /></li>
    </ul>
  )
}

export default NavLinks