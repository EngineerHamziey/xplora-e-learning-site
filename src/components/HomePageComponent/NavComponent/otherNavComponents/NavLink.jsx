

const NavLink = ({ link, text, menuState }) => {
  return (
    <li className="nav__link--links">
      <a href={link} className={"btn btn--nav-link " + menuState && "menu-opened"} >
        {text}
      </a>
    </li>
  )
}

export default NavLink