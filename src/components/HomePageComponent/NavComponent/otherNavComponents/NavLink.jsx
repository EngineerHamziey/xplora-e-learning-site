

const NavLink = ({ link, text, menuState }) => {

  const btnClassList = menuState ? "btn btn--nav-link menu-opened" : "btn btn--nav-link";
  
  return (
    <li className="nav__link--links">
      <a href={link} className={btnClassList} >
        {text}
      </a>
    </li>
  )
}

export default NavLink