import NavLinks from "./otherNavComponents/NavLinks"
import HomeLogo from "./otherNavComponents/HomeLogo"


import hamburger from "../imagesHome/hamburger.png"

const Nav = () => {
  return (
    <nav id="top" className="nav">
      <HomeLogo />
      <div className="user">
        <img src="/" alt="" />
      </div>
        <img src={hamburger} alt="" />
        <NavLinks />
    </nav>
  )
}

export default Nav