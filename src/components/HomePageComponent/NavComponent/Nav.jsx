import NavLinks from "./otherNavComponents/NavLinks";
import HomeLogo from "./otherNavComponents/HomeLogo";
// import hamburger from ".././imagesHome/hamburger.png"
// import UserMiniDP from "./otherNavComponents/UserMiniDP";

import { useState } from "react";


import hamburger from "../imagesHome/hamburger.png";

const Nav = ({ userImage }) => {
  const [menuState, setMenuState] = useState(false);

  const onMenuBtnClick = () => {
    setMenuState(!menuState);
  }

  let hamburgerClassList;
  if(menuState) {
    hamburgerClassList = "nav__hamburgers menu-opened nav__hamburgers--";
  } else  {
    hamburgerClassList = "nav__hamburgers nav__hamburgers--";
  }

  return (
    <nav id="top" className="nav">
      <HomeLogo />
      <button onClick={onMenuBtnClick} className="nav__btn" type="btn" alt="Menu" src={hamburger}>
        {/* <img src={hamburger} alt="" /> */}
        <div className={hamburgerClassList + "top"}></div>
        <div className={hamburgerClassList + "middle"}></div>
        <div className={hamburgerClassList + "bottom"}></div>
      </button>
      {/* render user only when user is logged in */}
      {/* <UserMiniDP userImage={userImage} /> */}
      <NavLinks menuState={menuState} />
    </nav>
  )
}

export default Nav