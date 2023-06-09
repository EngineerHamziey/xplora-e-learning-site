import NavLink from './NavLink';


const NavLinks = ({ menuState }) => {

    const navLinkClassName = (menuState) ? "nav__link menu-opened" : "nav__link";

  return (
    <ul className={navLinkClassName}>
      <NavLink menuState={menuState} className="nav__link-anchor-tag" link="#" type="link" text="Home" />
      <NavLink menuState={menuState} className="nav__link-anchor-tag" link="#" type="link" text="Library" />
      <NavLink menuState={menuState} className="nav__link-anchor-tag" link="#" type="link" text="Commnity" />
      <NavLink menuState={menuState} className="nav__link-anchor-tag" link="#" type="link" text="About Us" />
      <NavLink menuState={menuState} className="nav__link-anchor-tag" link="#" type="link" text="Login" />
      <NavLink menuState={menuState} className="nav__link-anchor-tag" link="#" type="link" text="Sign Up" />
    </ul>
  )
}

export default NavLinks